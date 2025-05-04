const { ComponentType } = require("discord-api-types/v10");

module.exports = {
    name: "$addTextComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* content: string, id: number (optional) */
        let [content, id] = data.inside.splits;
        id = parseInt(id);

        if (!content) return d.aoiError.fnError(d, "custom", {}, "Content is required for text component");

        res = { id: id ?? undefined, type: ComponentType.TextDisplay, content: content };
        data.result = JSON.stringify(res);
        return {
            code: d.util.setCode(data),
        };
    }
}