const { ComponentType } = require("discord-api-types/v10");

module.exports = {
    name: "$addSpacingComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* spacing: string, divider: boolean id: number (optional) */
        let [spacing = "small", divider = "true", id] = data.inside.splits;
        id = parseInt(id) || undefined;
        spacing = spacing?.addBrackets() === "large" ? 2 : 1;
        divider = divider === "true" ? true : false;

        res = { id: id, type: ComponentType.Separator, spacing: spacing ?? 1, divider: divider };
        data.result = JSON.stringify(res);
        return {
            code: d.util.setCode(data),
        };
    }
}