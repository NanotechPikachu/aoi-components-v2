const { ContainerBuilder } = require("discord.js");

module.exports = {
    name: "$containerBuilder",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* components: json[] */
        let [color, spoiler = "false", ...components] = data.inside.splits;
        color = color ? "0x"+color?.addBrackets() : undefined;

        spoiler = spoiler === "true" ? true : false;
        color = Number(color);

        let container = [];
        components.forEach(c => container.push(JSON.parse(c.addBrackets())));
        
        const contain = new ContainerBuilder({
            components: container
        });

        data.result = JSON.stringify(contain.toJSON());

        return {
            code: d.util.setCode(data)
        };
    }
}