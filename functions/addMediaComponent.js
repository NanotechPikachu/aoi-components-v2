const { MediaGalleryBuilder } = require("discord.js");

module.exports = {
    name: "$addMediaComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* medias: json[] */
        let [...medias] = data.inside.splits;
        let media = [];
        medias.forEach(m => media.push(JSON.parse(m.addBrackets())));

        const gallery = new MediaGalleryBuilder({
            items: media
        });

        data.result = JSON.stringify(gallery.toJSON());
        
        return {
            code: d.util.setCode(data),
        };
    }
}