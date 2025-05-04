const { ComponentType } = require("discord-api-types/v10");
const { SectionBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    name: "$addSectionComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* components: json[] */
        let [...components] = data.inside.splits;
        let container = [];
        components.forEach(c => container.push(JSON.parse(c?.addBrackets())));

        let textComponent = [];
        let accessory = [];
        
        container.forEach(c => {
            if (c?.type == ComponentType.TextDisplay) textComponent.push(c); 
            else accessory.push(c);
        });
        
        const section = new SectionBuilder({
            components: textComponent,
            accessory: accessory[0]
        });

        data.result = JSON.stringify(section.toJSON());

        return {
            code: d.util.setCode(data)
        };
    }
};