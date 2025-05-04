const { FileBuilder } = require("discord.js");

module.exports = {
    name: "$addFileComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* url: string, spoiler: boolean (optional) */
        let [url, spoiler = "false"] = data.inside.splits;

        spoiler = spoiler === "true" ? true : false;

        const file = new FileBuilder({
            spoiler: spoiler,
            file: {
                url: url?.addBrackets()
            }
        });

        data.result = JSON.stringify(file.toJSON());

        return {
            code: d.util.setCode(data),
        };
    }
}