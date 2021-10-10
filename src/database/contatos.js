var contatos = [
    {
        name: "Thanos",
        number: "+55 00 99999-0000",
        bio: "I'm inevitable",
        image: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/avengers-endgame-thanos_ys92.jpg",

        allMessages: [
            ["he", "Hey Guilherme..."],
            ["he", "keep cloning big apps?"],
            ["you", "Yes i'm doing a great job with it"],
            ["he", "too bad you won't be alive by then"],
            ["he", "this includes half the beings in the universe"],
            ["he", "joke man it's irony"],
        ],
        midia: [
            "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=925924214",
            "https://i1.wp.com/wipy.tv/wp-content/uploads/2020/11/iron-man-rdj.jpg?fit=1000%2C600&ssl=1",
            "https://1.bp.blogspot.com/-uXXnq_xWRQ8/W1jIuXJRqNI/AAAAAAABbzI/higb0MREziIgxxUWk_SalHDGLyyGw8t0ACKgBGAs/s1600/IMG_0916.JPG",
        ],
    },
    {
        name: "Rock",
        number: "+55 00 99999-0000",
        bio: "i am groot",

        image: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Rocket-Racoon-e-Baby-Groot-1024x576.jpg",
        allMessages: [
            ["he", "Where's groot"],
            ["he", "haha"],
            ["you", "..."],
        ],
        midia: [
            "data:image/jpeg;base64,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",
            "https://img.elo7.com.br/product/zoom/304C94B/baby-groot-guardioes-da-galaxia-novo-modelo-cestinha-decoracao.jpg",
            "",
        ],
    },
    {
        name: "user98",
        number: "+55 00 99999-0000",
        bio: "no pain no gain",

        image: "https://developers.google.com/web/images/contributors/no-photo.jpg?hl=pt-br",
        allMessages: [
            ["you", "testinggggggggg"],
            ["he", "tetetetets"],
            [
                "you",
                "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST",
            ],
            ["he", "CRACKS SDHAUDAASHJKDA"],
        ],
        midia: [
            "",
            "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/04/legiao_hZFMbaymqL4t.jpg.jpeg",
            "",
        ],
    },
    {
        name: "Susanoo",
        number: "+55 00 99999-0000",
        bio: "ouch",

        image: "https://1.bp.blogspot.com/-fFIsHa1AxvE/YQwxxaXpRRI/AAAAAAAA4Vk/VqFCf4WPHCYgflUCfCI6AQF-QeZ1GQ9ogCLcBGAsYHQ/w1600/Susanoo.jpg",
        allMessages: [
            ["he", "IM WANNA KILL THA THANATOS"],
            ["he", "I AM THE GOD OF THE GODS"],
            ["he", "AM THE GOD OF shit i forgot the phrase"],
            ["you", "thats weird"],
            ["he", "so so"],
            ["you", "a bit"],
        ],
        midia: [
            "https://i0.wp.com/mundo-nipo.com/wp-content/uploads/2015/07/Susanoo-vs-Yamata-no-Orochi-Foto-desciclopedia-compressed.jpg?fit=900%2C550&ssl=1",
            "https://i.ytimg.com/vi/Ce2eqkKpOso/maxresdefault.jpg",
            "https://static.wikia.nocookie.net/smite_gamepedia/images/c/cd/T_Susano_Pirate_Card.png/revision/latest?cb=20170228080145",
        ],
    },
    {
        name: "Light Yagami",
        number: "+55 00 99999-0000",
        bio: "I will kill the L.",

        image: "https://pbs.twimg.com/profile_images/1300601768561315840/2CzLdv6V_400x400.jpg",
        allMessages: [
            ["he", "have u killed l?"],
            ["he", "Yeah but don't waste my time, mere spectator"],
            ["he", "now i have more alphabet letters to kill"],
        ],
        midia: [
            "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/09/legiao_0AfxhMmQvZaE.png.jpeg",
            "https://img.quizur.com/f/img60d76989481ad8.64915494.jpg?lastEdited=1624729995",
            "https://m.media-amazon.com/images/I/41269gqgtHL._AC_SY450_.jpg",
        ],
    },
    {
        name: "user204",
        number: "+55 00 99999-0000",
        bio: "Disponível",

        image: "https://developers.google.com/web/images/contributors/no-photo.jpg?hl=pt-br",
        allMessages: [["he", "cring"]],
        midia: ["", "", ""],
    },
    {
        name: "user757",
        number: "+55 00 99999-0000",
        bio: "if we go down...",

        image: "https://developers.google.com/web/images/contributors/no-photo.jpg?hl=pt-br",
        allMessages: [
            ["you", "MUDA MUDA MUDA MUDA "],
            ["he", "ORA ORA ORA ORA ORA ORA ORA ORA ORA "],
            ["you", "MUDA MUDA MUDA MUDA MUDA MUDA MUDA "],
            ["he", "ORA RA ORA ORA ORA ORA ORA "],
            ["you", "MUDA MUDA MUDA MUDA MUDA MUDA "],
            ["you", "MUDA MUDA MUDA MUDA  MUDA "],
            ["he", "ORA  ORA ORA ORA ORA ORA ORA "],
            ["he", "ORA ORA ORA  ORA ORA ORA ORA ORA ORA ORA ORA ORA "],
            ["you", "MUDA MUDA MUDA MUDA MUDA MUDA MUDA "],
        ],
        midia: [
            "",
            "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/confira-os-principais-animes-da-temporada-de-outono-de-2021.jpg",
            "",
        ],
    },
];

module.exports = contatos;
