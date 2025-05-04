const { MessageFlags } = require("discord.js");

module.exports = {
    name: "$sendComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* components: json[] */
        let [...components] = data.inside.splits;
        let container = [];
        components.forEach(c => container.push(JSON.parse(c?.addBrackets())));
        
        await d.message.channel.send({ flags: MessageFlags.IsComponentsV2, components: container });

        return {
            code: d.util.setCode(data)
        };
    }
}