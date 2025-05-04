const { ThumbnailBuilder } = require("discord.js");

module.exports = {
    name: "$addThumbnailComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        let [url, description, spoiler] = data.inside.splits;
        spoiler = spoiler === "true" ? true : false;
        url = url?.addBrackets();

        const thumbnail = new ThumbnailBuilder({
            description: description ?? undefined,
            media: {
                url: url,
            },
            spoiler: spoiler ?? false,
        });

        data.result = JSON.stringify(thumbnail.toJSON());
        return {
            code: d.util.setCode(data),
        };
    }
}