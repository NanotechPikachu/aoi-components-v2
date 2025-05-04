const { ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "$addRowComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* components: json[] */
        let [...components] = data.inside.splits;

        let container = [];
        components.forEach(c => container.push(JSON.parse(c.addBrackets())));

        const row = new ActionRowBuilder({
            components: container
        });

        data.result = JSON.stringify(row.toJSON());

        return {
            code: d.util.setCode(data)
        };
    }
}