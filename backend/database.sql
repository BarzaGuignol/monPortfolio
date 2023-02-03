-- SQLBook: Code
CREATE DATABASE IF NOT EXISTS mon_portfolio;

USE mon_portfolio;

DROP TABLE IF EXISTS experiences;

DROP TABLE IF EXISTS competences;

DROP TABLE IF EXISTS projets;

DROP TABLE IF EXISTS livres;

DROP TABLE IF EXISTS tableaux;

DROP TABLE IF EXISTS oeuvres;

DROP TABLE IF EXISTS administrateur;


CREATE TABLE
    experiences (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        titre VARCHAR(255) NOT NULL,
        dateDebut INT,
        dateFin INT NOT NULL,
        description VARCHAR(500) NOT NULL,
        url_image VARCHAR(255) NOT NULL,
        impairOuPair INT NOT NULL,
        competences_id INT
    );

INSERT INTO
    experiences (
        id,
        titre,
        dateDebut,
        dateFin,
        description,
        url_image,
        impairOuPair,
        competences_id
    )
VALUES (
        1,
        "Baccalauréat",
        null,
        2015,
        "Baccalauréat filière Scientifique option Science de l'ingénieur spécialité physique-chimie",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf/page1-800px-2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf.jpg?20191031103801",
        1,
        1
    ),
    (
        2,
        "DUT GEII",
        null,
        2017,
        "Diplôme Universitaire Technologique en Génie Electrique et Informatique Industrielle",
        "https://faux-diplome.org/wp-content/uploads/2018/02/DUT.jpg",
        2,
        1
    ),
    (
        3,
        "Projet ETNA intitulé la 4ème voie",
        2016,
        2017,
        "Mise en œuvre d’une matrice de 294 pixels à l’aide de lampe de chantier. Conception des cartes électroniques et programmes nécessaires.",
        "https://www.florentlamouroux.com/wdat/work64/img_0664web.jpg",
        1,
        1
    ),
    (
        4,
        "DUT GEII",
        null,
        2017,
        "Diplôme Universitaire Technologique en Génie Electrique et Informatique Industrielle. Cours : Automatisme / Electronique / Informatique de réseau / Electricité de puissance",
        "https://faux-diplome.org/wp-content/uploads/2018/02/DUT.jpg",
        2,
        1
    ),
    (
        5,
        "Stage Développement Informatique à RTE",
        null,
        2017,
        "Stage de fin d'étude sur 3 mois. Mise en place d'un moteur de recherche interne à RTE en VBA.",
        "",
        1,
        1
    ),
    (
        6,
        "Technicien Tests",
        2018,
        2019,
        "Expertise et gestion des différents produits aéronautiques sur plusieurs lignes de production en milieu sensible risque ESD.",
        "",
        2,
        1
    ),
    (
        7,
        "Technicien de Maintenance",
        2019,
        2022,
        "Suivi régulier d'un parc de machines pour assurer le maintien de la production en atmosphère contrôlée de type salle blanche.",
        "",
        1,
        1
    ),
    (
        8,
        "Wild Code School",
        null,
        2023,
        "Activités et associations : Formation intensive 5 mois - Développeur Web Titre professionnel Développeur Web et Web Mobile, inscrit au RNCP, de niveau 5 (équivalent Bac+2)",
        "",
        2,
        1
    );

CREATE TABLE
    competences (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom VARCHAR(100) NOT NULL,
        annees_exp INT NOT NULL,
        icone VARCHAR(255) NOT NULL
    );

INSERT INTO
    competences (
        id,
        nom,
        annees_exp,
        icone
    )
VALUES (
        1,
        "Javascript",
        2,
        "https://img2.freepng.fr/20180720/pjj/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b16dbcd8.5939232615320700654495.jpg"
    );

CREATE TABLE
    projets (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        titre VARCHAR(255) NOT NULL,
        url_image VARCHAR(255),
        description VARCHAR(500) NOT NULL,
        url_github VARCHAR(255) NOT NULL,
        url_site varchar(255)
    );

INSERT INTO
    projets (
        id,
        titre,
        url_image,
        description,
        url_github,
        url_site
    )
VALUES (
        1,
        "Projet 1",
        "",
        "Premier projet réalisé au sein de la Wild Code School pour validation compétences HTML/CSS. Réalisation d'un site internet sur Stan Lee et ses comics.",
        "https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-TEAM-A",
        ""
    ),
    (
        2,
        "Projet 2",
        "",
        "Deuxième projet réalisé au sein de la Wild Code School pour validation compétences React et Express. Réalisation d'un site d'e-commerce sur le thème de pokémon.",
        "https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-projet2-team2",
        ""
    ),
    (
        3,
        "Hackathon 1",
        "",
        "48h pour créer un site internet sur le thème du voyage. Nous avons réalisé Space Journey, une interface haute en couleur pour faire voyager et jouer nos utilisateurs dans l'espace.",
        "https://github.com/o6ris/SpaceJourney",
        "https://dev--hackathon-space-journey.netlify.app/"
    ),
    (
        4,
        "Projet 3",
        "",
        "Troisième projet réalisé au sein de la Wild Code School pour validation des compétences en React/Express/SQL. Réalisation d'une interface intranet pour créer, gérer et archiver des prises de décisions en fullstack (interface front en React et back en Express)",
        "https://github.com/WildCodeSchool/2022-09-RMT-JSCREW-Makesense",
        ""
    ),
    (
        5,
        "Hackathon 2",
        "",
        "48H pour créer un site de location d'une flotte de véhicules avec trois niveaux d'authentification. Elaboration d'une logique back pour donner la possibilité de mettre à jour la flotte de véhicule par des professionnels et donner la possibilité aux particuliers d'effectuer une réservation. Hackathon réalisé en partenariat avec Amazon Web Services.",
        "https://github.com/o6ris/NoPainNoGainTheComeBack/tree/dev",
        ""
    );

CREATE TABLE
    livres (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        titre VARCHAR(255) NOT NULL,
        url_image VARCHAR(255) NOT NULL,
        url_boutique VARCHAR(255)
    );

INSERT INTO
    livres (
        id,
        titre,
        url_image,
        url_boutique
    )
VALUES (
        1,
        "Robert Noyer: Les Yeux du Mal",
        "https://m.media-amazon.com/images/I/51msy531FyL.jpg",
        "https://www.amazon.fr/Robert-Noyer-Yeux-du-Mal/dp/2955806919"
    ),
    (
        2,
        "Le Marionnettiste",
        "https://www.thebookedition.com/1671367-img_product_list/le-marionnettiste.jpg",
        "https://www.thebookedition.com/fr/le-marionnettiste-p-394973.html"
    );

CREATE TABLE tableaux (
  id int primary key NOT NULL AUTO_INCREMENT,
  titre nvarchar(255) NOT NULL,
  style nvarchar(100),
  type nvarchar(500),
  auteur nvarchar(255) NOT NULL,
  description nvarchar(500),
  date int NOT NULL,
  url_image varchar(500)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO
  tableaux (titre, style, type, auteur, description, date, url_image)
VALUES
  (
    N'La Nuit étoilée',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'La Nuit étoilée est une peinture de l''artiste peintre postimpressionniste néerlandais Vincent van Gogh. Le tableau représente ce que Van Gogh pouvait voir et extrapoler de la chambre qu''il occupait dans l''asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence en mai 1889.',
    1889,
    "https://www.kazoart.com/blog/wp-content/uploads/2017/03/van-gogh-la-nuit-etoilee-1.jpg"
  ),
  (
    N'Saturne dévorant un de ses fils',
    'Romantisme',
    'peinture mythologique',
    'Francisco de Goya',
    N'Ce tableau fait référence à la mythologie grecque par le biais de la mythologie latine. L''un des titans, Cronos (assimilé à Saturne), pour éviter que ne s''accomplisse la prédiction selon laquelle il serait détrôné par l''un de ses fils, dévore chacun d''eux à leur naissance.',
    1823,
    "https://alheuredelart.files.wordpress.com/2018/04/francisco_de_goya_saturno_devorando_a_su_hijo_1819-1823.jpg?w=723"
  ),
  (
    N'La Cène',
    N'Art chrétien',
    'peinture murale',
    N'Léonard de Vinci',
    N'Le thème de l''œuvre est un de ceux de l''iconographie chrétienne : La Cène (terme issu du latin cena : repas du soir) est le nom donné par les chrétiens au dernier repas que Jésus-Christ prit avec les Douze Apôtres le soir du Jeudi saint, avant la Pâque juive, peu de temps avant son arrestation, la veille de sa Crucifixion (appelée encore Passion par les chrétiens), et trois jours avant sa résurrection.',
    1498,
    "https://www.infochretienne.com/wp-content/uploads/2019/07/Sans-titre-1-69-1200x600.jpg"
  ),
  (
    'Le Baiser',
    'Symbolisme, Art nouveau',
    N'peinture à l''huile',
    'Gustav Klimt',
    N'Le tableau est au format carré dont les deux personnages occupent le centre-haut. Elle représente un homme qui embrasse une femme sur la joue. Le couple est enlacé.',
    1909,
    "https://www.guide-artistique.com/images/gustav-klimt-le-baiser.jpg"
  ),
  (
    N'La jeune Fille à la perle',
    'Baroque',
    N'peinture à l''huile',
    'Johannes Vermeer',
    N'La Jeune Fille à la perle est une peinture à l''huile sur toile réalisée par le peintre néerlandais Johannes Vermeer vers 1665. Ce tableau de moyenne dimension est un portrait en buste d''une jeune femme anonyme — peut-être l''une des filles de Vermeer — portant une perle à l''oreille ainsi qu''un turban sur la tête.',
    1665,
    "https://upload.wikimedia.org/wikipedia/commons/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg"
  ),
  (
    'Portrait d''Adele Bloch-Bauer I',
    'Jugendstil',
    N'peinture à l''huile',
    'Gustav Klimt',
    N'Le Portrait d''Adele Bloch-Bauer I est un tableau du peintre symboliste autrichien Gustav Klimt, réalisé entre 1903 et 1907. Commandé par Ferdinand Bloch-Bauer, banquier et producteur de sucre, le mari d''Adele Bloch-Bauer, ce portrait est l''œuvre la plus représentative du cycle d''or de Klimt.',
    1907,
    "https://www.repro-tableaux.com/kunst/gustav_klimt/bildnis-adele-bloch-bauer-l.jpg"
  ),
  (
    'Salvator Mundi',
    N'Art chrétien',
    N'peinture à l''huile',
    N'Léonard de Vinci',
    N'Le Salvator Mundi est une peinture à l''huile sur bois de noyer, sur le thème du Christ rédempteur, attribuée par plusieurs experts à Léonard de Vinci en totalité ou en partie, ou à l''un de ses élèves Bernardino Luini ou Giovanni Antonio Boltraffio.',
    1500,
    "https://www.latribunedelart.com/IMG/jpg/leonard-2.jpg?48515/0ca9d48836af0a0e11ef806c30f210dabf17ef33"
  ),
  (
    'La Dame de Shalott',
    N'Préraphaélisme',
    N'peinture à l''huile',
    'John William Waterhouse',
    N'Cette œuvre est la représentation d''une scène tirée du poème du même nom, écrit par Lord Alfred Tennyson en 1832, dans lequel le poète décrit le destin d''une jeune femme, enfermée pour une raison secrète dans une tour voisine du château du roi Arthur, Camelot.',
    1888,
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg"
  ),
  (
    N'Le Déjeuner des canotiers',
    'Impressionnisme',
    N'peinture à l''huile',
    'Pierre-Auguste Renoir',
    N'Le Déjeuner des canotiers est une huile sur toile majeure du peintre impressionniste français Auguste Renoir réalisée entre 1880 et 1881, exposée lors de la septième exposition des peintres impressionnistes en 1882.',
    1881,
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg"
  ),
  (
    'Impression, soleil levant',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Impression, soleil levant est un tableau de Claude Monet conservé au musée Marmottan à Paris, dont le titre donné pour la première exposition impressionniste d''avril 1874 a donné son nom au courant de l''impressionnisme. La date d''exécution de cette marine, probablement pendant l''hiver 1872-1873, est hypothétique.',
    1872,
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
  ),
  (
    N'Nuit étoilée sur le Rhône',
    'Impressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Nuit étoilée sur le Rhône, fait partie d’une grande série, avec d’autres toiles consacrées à la lumière de la nuit. Tel que La Nuit étoilée peinte en juin 1889, cette fois-ci lorsqu''il était interné. Ça représente sa vue depuis sa chambre à l''asile de Saint-Remy-de-Provence. Le tableau est conservé au M.O.M.A de New York depuis 1941.',
    1888,
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  ),
  (
    'La Joconde',
    'Haute Renaissance',
    N'peinture à l''huile',
    N'Léonard de Vinci',
    N'La Joconde, ou Portrait de Mona Lisa, est un tableau de l''artiste Léonard de Vinci, réalisé entre 1503 et 1506 ou entre 1513 et 1516, et peut-être jusqu''à 1517, qui représente un portrait mi-corps, probablement celui de la Florentine Lisa Gherardini, épouse de Francesco del Giocondo.',
    1503,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg"
  ),
  (
    'Iris',
    'Impressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Iris est une peinture de Vincent van Gogh, une des premières exécutées à l''asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence, l''année précédant sa mort.',
    1889,
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Irises-Vincent_van_Gogh.jpg"
  ),
  (
    N'Champ de blé avec cyprès',
    'Impressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Champ de blé avec cyprès est une série de trois tableaux similaires et réalisés en 1889 par Vincent van Gogh. La National Gallery de Londres détient la version de septembre 1889. Une autre peinture, peinte en juillet de la même année, est exposée au Metropolitan Museum of Art de New York.',
    1889,
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg"
  ),
  (
    'Composition VIII',
    'Art abstrait',
    N'peinture à l''huile',
    'Vassily Kandinsky',
    N'Réalisée lors de la période d''intense production que fut le professorat de Kandinsky au Bauhaus, la Composition VIII est représentative de sa théorie d''associations perceptives des couleurs et des formes géométriques.',
    1923,
    "https://cms.guggenheim-bilbao.eus/uploads/2020/09/composition-8.jpg"
  ),
  (
    N'Terrasse du café le soir',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Terrasse du café le soir, également connu sous le nom de Terrasse de café sur la place du Forum, est une peinture de l''artiste néerlandais Vincent van Gogh réalisée à Arles en septembre 1888, entre le 9 et 16 du mois.',
    1888,
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg"
  ),
  (
    'Les larmes d''or de Freyja',
    'Art onirique',
    N'peinture à l''huile',
    'Anne-Marie Zilberman',
    N'Souvent attribué à Gustav Klimt, ce tableau intitulé larmes d’or n''a pas été peint par Gustav Klimt, mais par l''artiste française Anne-Marie Zilberman, dans un style rappelant celui de Klimt (peintre symboliste autrichien).',
    1900,
    "https://i.etsystatic.com/5546865/r/il/56f8d0/2183656085/il_794xN.2183656085_gxsy.jpg"
  ),
  (
    'Le Voyageur contemplant une mer de nuages',
    'Romantisme Allemand',
    N'peinture à l''huile',
    'Caspar David Friedrich',
    N'Le Voyageur contemplant une mer de nuages aussi intitulé Le Voyageur au-dessus de la mer de nuages ou L''homme contemplant une mer de brume est un tableau du peintre romantique allemand Caspar David Friedrich. Il a été composé à partir de 1818 et est, avec La Mer de glace, l''une des œuvres les plus célèbres du peintre.',
    1818,
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
  ),
  (
    'Amandier en fleurs',
    'Impressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Van Gogh a peint ce tableau en hommage au fils de son frère Théo, Vincent Willem (né le 31 janvier 1890), dont il est le parrain. Pour symboliser cette nouvelle vie, Vincent choisit de représenter les branches d''un amandier, l''un des arbres les plus précoces au printemps qui, en février déjà, se pare de fleurs pour en annoncer l''arrivée.',
    1890,
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg"
  ),
  (
    N'La Dame à l''hermine',
    'Haute Renaissance',
    N'peinture à l''huile',
    N'Léonard de Vinci',
    N'La Dame à l''hermine est une peinture à l''huile sur panneau de bois de 54 × 39 cm réalisée par Léonard de Vinci à Milan, en 1488. Longtemps propriété de la famille Czartoryski, il appartient depuis fin 2016 à l''État polonais.',
    1489,
    "https://www.rivagedeboheme.fr/medias/images/vinci..dame...l.hermine.-1483-90-.jpg?fx=r_1200_800"
  ),
  (
    'Le Chardonneret',
    N'Age d''or de la peinture néerlandaise',
    N'peinture à l''huile',
    'Carel Fabritius',
    N'Le Chardonneret a été peint en 1654, quelques mois avant le décès de Fabritius dans l''explosion de la poudrière de Delft.',
    1654,
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Fabritius-vink.jpg"
  ),
  (
    'Les Coquelicots',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Les Coquelicots est un tableau peint par Claude Monet, terminé en 1873. Depuis sa donation à l''État français en 1906 par Étienne Moreau-Nélaton, il est conservé dans les musées nationaux. Il est attribué et exposé au Musée d''Orsay à Paris.',
    1873,
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Claude_Monet_037.jpg"
  ),
  (
    'L''avenue sous la pluie',
    'Impressionnisme',
    N'peinture à l''huile',
    'Frederick Childe Hassam',
    N'Le tableau le plus célèbre de sa série, The Avenue in the Rain (1917), représente des drapeaux américains et leur reflets sous la pluie. L''influence de Claude Monet y est très présente.',
    1917,
    "https://fr.wahooart.com/Art.nsf/O/8DP6WL/$File/Frederick-Childe-Hassam-The-Avenue-in-the-Rain.jpg"
  ),
  (
    'L''Arbre de Vie',
    'Symbolisme',
    N'peinture à l''huile',
    'Gustav Klimt',
    N'L''Arbre de Vie, Frise Stoclet est une peinture du peintre symboliste autrichien Gustav Klimt. Il a été achevé en 1909 et est basé sur le style Art Nouveau dans un genre de peinture symbolique.',
    1909,
    "http://img.over-blog-kiwi.com/0/55/16/13/20160209/ob_ce8413_albero-della-vita-di-gustav-klimt-1905.jpg"
  ),
  (
    N'Le Dernier Voyage du Téméraire',
    'Romantisme',
    N'peinture à l''huile',
    'Joseph Mallord William Turner',
    N'Le tableau, exposé pour la première fois à la Royal Academy en 1839, dépeint l''un des derniers navires de ligne de deuxième rang qui joua un rôle capital dans la bataille de Trafalgar, le HMS Temeraire, tracté par un remorqueur à vapeur muni de roues à aubes vers Rotherhithe (au sud-est de Londres), pour y être détruit.',
    1838,
    "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg"
  ),
  (
    'Lady Godiva',
    N'Préraphaélisme',
    N'peinture à l''huile',
    'John Maler Collier',
    N'Le portrait de Lady Godiva et sa célèbre chevauchée à travers la ville de Coventry, en Angleterre, est exposé au Herbert Art Gallery and Museum de Coventry.',
    1897,
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lady_Godiva_%28John_Collier%2C_c._1897%29.jpg"
  ),
  (
    N'Saint-Georges-Majeur au crépuscule',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Les tons sont chauds. Cette peinture a été faite pendant la visite de Claude Monet à Venise en automne 1908, représente l''île de San Giorgio Maggiore et son monastère noyés dans la brume.',
    1912,
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Claude_Monet%2C_Saint-Georges_majeur_au_cr%C3%A9puscule.jpg"
  ),
  (
    'La Mise au tombeau',
    'Baroque',
    N'peinture à l''huile',
    'Caravage',
    N'C''est l''un des tableaux les plus fameux du peintre lombard, qu''il exécute au cours de son séjour romain et qui lui vaut une critique unanimement positive dès sa création : de nombreux artistes importants en effectuant d''ailleurs des copies au fil des siècles, de Rubens jusqu''à Paul Cézanne.',
    1604,
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Caravaggio_-_La_Deposizione_di_Cristo.jpg"
  ),
  (
    N'Le Jardin de l''artiste à Giverny',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Le Jardin de l''artiste à Giverny est une huile sur toile de Claude Monet peinte en 1900 et maintenant conservée au musée d''Orsay à Paris. C''est l''une des nombreuses œuvres de l''artiste de son jardin à Giverny au cours des trente dernières années de sa vie.',
    1900,
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg"
  ),
  (
    'Le Cri',
    'Expressionnisme',
    'tempera sur carton',
    'Edvard Lunch',
    N'Le Cri est une œuvre expressionniste de l''artiste norvégien Edvard Munch dont il existe cinq versions réalisées entre 1893 et 1917. Symbolisant l''homme moderne emporté par une crise d''angoisse existentielle, elle est considérée comme l''œuvre la plus importante de l''artiste.',
    1893,
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
  ),
  (
    N'La naissance de Vénus',
    'Renaissance italienne',
    'tempera',
    'Sandro Botticelli',
    N'Le tableau représente la déesse Vénus arrivant sur le rivage après sa naissance. Ce tableau était une œuvre révolutionnaire à l''époque, car il présentait un nu sans aucune justification religieuse, ainsi qu''un thème mythologique issu de la culture gréco-romaine classique antérieure au christianisme, ce qui signifiait que le nouvel humanisme de la Renaissance, loin de l''obscurantisme médiéval, était pleinement accepté, du moins par les élites culturelles.',
    1485,
    "https://www.kazoart.com/blog/wp-content/uploads/2019/03/botticelli-naissance-de-venus.jpg"
  ),
  (
    'La Pie',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'La Pie est une peinture à l''huile sur toile réalisée par l''impressionniste Claude Monet à Étretat en 1868-1869 et conservée au musée d''Orsay. Elle représente un paysage enneigé à Etretat et témoigne du début du mouvement impressionniste. La pie posée sur une clôture dans un paysage hivernal lui donne son titre.',
    1869,
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg"
  ),
  (
    N'Borée',
    'Romantisme',
    N'peinture à l''huile',
    'John William Waterhouse',
    N'Borée est un tableau peint par John William Waterhouse en 1903. Il représente Borée, la personnification grecque du vent du nord et mesure 94 cm de haut sur 69 cm de large. Longtemps perdu, le tableau est réapparu dans les années 1990 et conservé dans une collection privée.',
    1903,
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Boreas.jpg"
  ),
  (
    'Les Deux Soeurs',
    'Impressionnisme',
    N'peinture à l''huile',
    'Auguste Renoir',
    N'Renoir a travaillé à ce tableau sur la terrasse de la maison Fournaise, restaurant situé sur une île de Chatou, au bord de la Seine. Il montre une jeune femme vêtue de bleu avec un chapeau rouge et sa petite sœur au chapeau fleuri, assises dehors avec un panier contenant des pelotes de laine.',
    1881,
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Renoir%2C_Pierre-Auguste_-_The_Two_Sisters%2C_On_the_Terrace.jpg"
  ),
  (
    N'Crâne de squelette fumant une cigarette',
    N'Postimpressionnisme, Réalisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Elle représente, comme son titre l''indique, un crâne qui fume une cigarette.',
    1888,
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg"
  ),
  (
    'Les Raboteurs de parquet',
    N'Impressionnisme, Réalisme',
    N'peinture à l''huile',
    'Gustave Caillebotte',
    N'Ce tableau constitue une des premières représentations du prolétariat urbain.',
    1875,
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg"
  ),
  (
    N'La Seine à Asnières',
    'Impressionnisme',
    N'peinture à l''huile',
    'Pierre-Auguste Renoir',
    N'Le cadre exact pour cette image n''a pas été identifié, mais il montre probablement la rivière Seine à Chatou, à l''ouest de Paris. Asnières était devenu au milieu du XIX° siècle, comme Chatou, un lieu de rendez-vous des canotiers parisiens, alors qu''Argenteuil accueillait plutôt des amateurs de voile.',
    1880,
    "https://www.repro-tableaux.com/kunst/pierre_auguste_renoir/pierre_auguste_renoir_seine.jpg"
  ),
  (
    'La Vierge au lys',
    N'Académisme',
    N'peinture à l''huile',
    'Adolphe-Williams Bouguereau',
    '',
    1899,
    "https://upload.wikimedia.org/wikipedia/commons/1/17/La_Vierge_au_lys.jpg"
  ),
  (
    N'La Persistance de la mémoire',
    N'Surréalisme',
    N'peinture à l''huile',
    'Salvador Dali',
    N'Représentant la plage de Portlligat agrémentée de montres à gousset fondant tel du camembert, la toile tourne autant en dérision la rigidité du temps — opposée ici à la persistance de la mémoire, titre de l’œuvre — qu''elle reflète les angoisses du peintre devant l''inexorable avancée du temps et de la mort.',
    1931,
    "https://www.kazoart.com/blog/wp-content/uploads/2019/05/Salvador-Dali-persistance-de-la-memoire-1931.jpg"
  ),
  (
    'Le Boxeur',
    'Symbolisme',
    N'peinture à l''huile',
    N'Constantin Andreïevitch Somov',
    N'Dans une lettre à sa sœur, Somov évoque une huile sur toile, celle du ”Boxeur”. Étant un homme sensible aux détails et très critique, surtout envers lui-même, son appréciation laisse deviner une affection particulière de cette œuvre où s’entremêlent vulnérabilité et virilité.',
    1933,
    "https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Boxer_%28by_Konstantin_Somov%29.jpg"
  ),
  (
    'Tour Eiffel',
    'Cubisme',
    N'peinture à l''huile',
    'Robert Delaunay',
    N'Tour Eiffel est une peinture à l''huile. Au milieu est représentée la tour Eiffel de couleur rouge, entourée d''une aura blanche et de bâtiments gris. Le dessin est caractérisé par des formes géométriques.',
    1911,
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Delaunay_-_Tour_Eiffel.jpeg"
  ),
  (
    'Les Hasards heureux de l''escarpolette',
    'Rococo',
    N'peinture à l''huile',
    N'Jean-Honoré Fragonard',
    N'Ce tableau est une œuvre très célèbre de l''artiste. Une jeune femme en robe rose se balance, dévoilant ses jambes à son amant et tournant le dos à son vieux mari dans l''ombre. C''est un tableau empreint d''une certaine légèreté et de frivolité. Ce tableau est caractéristique du mouvement rococo.',
    1769,
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fragonard%2C_The_Swing.jpg"
  ),
  (
    'Flower Garden',
    'Art nouveau',
    N'peinture à l''huile',
    'Gustav Klimt',
    N'Flower Garden de Gustav Klimt présente le style impressionniste floral que l''artiste a exploré à travers sa gamme de pièces de jardin qui comprend Farm Garden with Crucifix (1911) et Farm Garden with Sunflower (1913).',
    1906,
    "https://upload.wikimedia.org/wikipedia/commons/e/ed/Klimt_bauerngarten.jpg"
  ),
  (
    'Lignes d''intersection',
    'Art abstrait',
    N'peinture à l''huile',
    'Vassily Kandinsky',
    '',
    1923,
    "https://www.ecole-occidentale-meditation.com/wp-content/uploads/2019/11/kandinsky-lignes-dintersection-1923.jpg"
  ),
  (
    N'L''École d''Athènes',
    'Haute renaissance',
    'fresque',
    'Raffaello Sanzio',
    N'L''École d''Athènes est une fresque du peintre italien Raphaël, située dans la Chambre de la Signature des musées du Vatican, l''une des quatre Chambres de Raphaël situées à l''intérieur du palais apostolique. C''est l''une des œuvres picturales les plus importantes de la Cité du Vatican.',
    1512,
    "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg?uselang=fr"
  ),
  (
    N'La Laitière',
    'Baroque',
    N'peinture à l''huile',
    'Johannes Vermeer',
    N'L''œuvre compte parmi les plus célèbres de Vermeer, et même de l''histoire de la peinture — son utilisation à des fins commerciales n''étant sûrement pas étrangère à sa grande popularité en France.',
    1658,
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg"
  ),
  (
    N'Champ de coquelicots dans un creux près de Giverny',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Quand Monet a peint ce vallon, en 1885, il était envahi de fleurs rouges.',
    1885,
    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Claude_Monet_-_Poppy_Field_in_a_Hollow_near_Giverny_-_Google_Art_Project.jpg"
  ),
  (
    'Bonaparte franchissant le Grand-Saint-Bernard',
    N'Néo-classique',
    N'peinture à l''huile',
    'Jacques-Louis David',
    N'Bonaparte franchissant le Grand-Saint-Bernard est un portrait équestre de Napoléon Bonaparte alors Premier Consul, réalisé par Jacques-Louis David entre 1800 et 1803. Napoléon est représenté lors du franchissement du col alpin du Grand-Saint-Bernard par l''armée de réserve, épisode qui marque le début de la seconde campagne d''Italie.',
    1805,
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg"
  ),
  (
    'Le Christ dans la maison de Marthe et Marie',
    'Age d''or de la peinture néerlandaise',
    N'peinture à l''huile',
    'Johannes Vermeer',
    N'Le tableau représente le Christ, entouré par Marthe et Marie de Béthanie, les deux sœurs de Lazare, l''un des disciples de Jésus. Marie, assise à ses pieds, écoute ses enseignements, alors que Marthe s''intéresse à bien le recevoir, en lui offrant à manger.',
    1655,
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Johannes_%28Jan%29_Vermeer_-_Christ_in_the_House_of_Martha_and_Mary_-_Google_Art_Project.jpg"
  ),
  (
    'L''Annonciation',
    N'Art chrétien',
    N'tempura, peinture à l''huile',
    N'Léonard de Vinci',
    N'L''Annonciation est un tableau de l''atelier de Verrocchio, attribué à Léonard de Vinci et exposé à la galerie des Offices de Florence. Il représente l’ange Gabriel saluant la Vierge Marie et l''interrompant dans sa lecture de la Bible pour lui annoncer qu’elle est destinée à donner naissance au fils de Dieu.',
    1472,
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Annunciation_%28Leonardo%29.jpg"
  ),
  (
    'June flamboyante',
    N'Préraphaélisme',
    N'peinture à l''huile',
    'Frederic Leighton',
    N'Il est largement considéré comme le chef-d''œuvre de Leighton, montrant sa nature classique. On pense que la femme représentée fait allusion aux figures de nymphes endormies et de naïades que les Grecs sculptaient souvent.',
    1895,
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg"
  ),
  (
    'Le Pont japonais',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'Le jardin d''eau de Claude Monet à Giverny est orné d''un petit pont de bois qui enjambe l''extrémité du bassin, là où l''étang redevient un ruisseau prêt à se jeter dans le Ru. La forme arquée de cette passerelle et de son garde-corps lui ont valu le nom de pont japonais.',
    1922,
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge_-_Google_Art_Project.jpg"
  ),
  (
    'Pommier aux fruits rouges',
    'Symbolisme',
    N'peinture à l''huile',
    'Paul-Elie Ranson',
    N'Avec ses tons dorés et ses touches de rouge, "Pommier aux fruits rouges" montre clairement l''influence des estampes japonaises sur le travail de Paul-Elie Ranson. Cet artiste du XIXe siècle faisait partie d''un groupe appelé Les Nabis (Les Prophètes) qui se concentrait sur les interactions entre les humains et le monde naturel.',
    1902,
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pommier_aux_fruits_rouges%2C1902%2Chuile_sur_toile%2C85%2C1_x_118%2C7cm.jpg"
  ),
  (
    'Danseuses saluant',
    'Impressionnisme',
    'pastel',
    'Edgar Degas',
    '',
    1885,
    "https://www.degas-catalogue.com/images/453.jpg"
  ),
  (
    N'Portrait d''Irène Cahen d''Anvers',
    N'Impressionnisme, Réalisme',
    N'peinture à l''huile',
    'Auguste Renoir',
    N'Ce tableau, commandé par la famille Cahen d''Anvers puis transmis aux Camondo, a fait partie des œuvres d''art volées par les nazis. Il apparaît dans le film Monuments Men (2014).',
    1880,
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_1880%2C_Portrait_of_Mademoiselle_Ir%C3%A8ne_Cahen_d%27Anvers%2C_Sammlung_E.G._B%C3%BChrle.jpg"
  ),
  (
    'Rue de Paris, temps de pluie',
    'Impressionnisme',
    N'peinture à l''huile',
    'Gustave Caillebotte',
    N'Ce tableau fut réalisé par Gustave Caillebotte, alors âgé de vingt-neuf ans, pour la troisième exposition impressionniste organisée par la Société anonyme des artistes peintres, sculpteurs et graveurs à Paris au 6 rue Le Peletier en avril 1877, au cours de laquelle il présenta six œuvres dont cette toile.',
    1877,
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Caillebotte_Rue_de_Paris.jpg"
  ),
  (
    'Les Tournesols',
    'Impressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Les Tournesols est le nom attribué à deux séries de peintures réalisées par Vincent van Gogh.',
    1888,
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg"
  ),
  (
    'Jeunes Filles sur un pont',
    'Expressionnisme',
    N'peinture à l''huile',
    'Edvard Munch',
    N'Trois jeunes femmes sont debout contre la balustrade d''un pont. Ce pont, prolongé par une route qui monte, est un lieu particulier d''Aagaardstrand, une station balnéaire du fjord d''Oslo, où Munch a passé de nombreux étés, une saison très courte en Norvège.',
    1901,
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Munch_Girls_on_the_pier.jpg"
  ),
  (
    'La Promenade',
    'Impressionnisme',
    N'peinture à l''huile',
    'Claude Monet',
    N'La Promenade, aussi appelée La Femme à l''ombrelle, appartient à une série de peintures exécutées par Monet pendant les étés 1875 et 1876 et qui représentent le jardin de sa seconde maison à Argenteuil et les champs couverts de coquelicots près de Colombes et de Gennevilliers.',
    1875,
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Monet_Umbrella.JPG"
  ),
  (
    N'Le Christ dans la tempête sur la mer de Galilée',
    N'Age d''or de la peinture néerlandaise',
    N'peinture à l''huile',
    'Rembrandt',
    N'La composition représente une scène biblique décrite dans le Nouveau Testament : le miracle de la tempête apaisée sur le lac de Tibériade, selon le chapitre 4 de l''Évangile selon Marc dans le Nouveau Testament.',
    1633,
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg"
  ),
  (
    'Le Printemps',
    N'Académisme',
    N'peinture à l''huile',
    'Pierre Auguste Cot',
    N'Le travail de Cot représente un jeune couple enfermé dans une étreinte sur une balançoire au milieu d''une forêt ou d''un jardin. Les deux portent des vêtements classiques et sont apparemment captivés l''un par l''autre, décrits par une source comme "ivres du premier amour".',
    1873,
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/PIERRE-AUGUSTE_COT_-_Primavera_%28Museo_Metropolitano_de_Nueva_York%2C_1873._%C3%93leo_sobre_lienzo%2C_213.4_x_127_cm%29.jpg"
  ),
  (
    N'Martin-pêcheur',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'On lui prêtait la capacité de prévoir le temps: pendu à un fil, son cadavre aurait indiqué, de la pointe du bec, la provenance du vent. Enfin, il a servi "d''antimites" dans les armoires... Van Gogh, lui, a voulu capter la pureté d''un bleu surnaturel.',
    1887,
    "https://p3.storage.canalblog.com/34/82/347638/40585986.jpg"
  ),
  (
    'Plusieurs Cercles',
    'Art abstrait',
    N'peinture à l''huile',
    'Vassily Kandinsky',
    N'Pionnier de l''abstraction et théoricien de principes esthétiques renommés, Vassily Kandinsky est l''un des artistes les plus novateurs du début du XXe siècle.',
    1926,
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Vassily_Kandinsky%2C_1926_-_Several_Circles%2C_Gugg_0910_25.jpg"
  ),
  (
    'Vue de Delft',
    N'Age d''or de la peinture néerlandaise',
    N'peinture à l''huile',
    'Johannes Vermeer',
    N'Cette Vue de Delft représente une partie de la ville natale de Vermeer sous la forme d''une veduta, une peinture très détaillée d''un paysage urbain.',
    1660,
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vermeer-view-of-delft.jpg"
  ),
  (
    'Composition VII',
    'Art abstrait',
    N'peinture à l''huile',
    'Vassily Kandinsky',
    N'Elle est unanimement considérée comme l''œuvre maîtresse de l''artiste, pour la période d''avant la Première Guerre mondiale.',
    1913,
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg"
  ),
  (
    'La Femme en rouge',
    'Macchiaioli',
    N'peinture à l''huile',
    'Giovanni Boldini',
    '',
    0,
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Boldini%2C_Woman_in_Red.jpg"
  ),
  (
    N'Jeune orpheline au cimetière',
    'Romantisme',
    N'peinture à l''huile',
    N'Eugène Delacroix',
    N'Jeune orpheline au cimetière est un tableau réalisé par Eugène Delacroix vers 1824, durant ses travaux préparatoires pour son tableau Scène des massacres de Scio.',
    1824,
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Jeune_Orpheline_au_cimeti%C3%A8re_-_Eug%C3%A8ne_Delacroix_-_Muse_du_Louvre_Peintures_RF_1652.jpg"
  ),
  (
    N'Le Ravissement de Psyché',
    N'Réalisme',
    N'peinture à l''huile',
    'Adolphe-Williams Bouguereau',
    N'Le tableau montre Cupidon qui enlace Psyché en s''élevant vers un autre monde avec l''intention d''en faire sa femme. Psyché a des ailes de papillon, ce qui signifie qu''elle a atteint l''état d''immortalité.',
    1895,
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/Psycheabduct.jpg"
  ),
  (
    'La Sieste',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Paul Gauguin',
    N'L''image est une représentation sans prétention d''un groupe de femmes tahitiennes vêtues de vêtements occidentalisés discutant à l''ombre fraîche d''une véranda pendant le chaud soleil de l''après-midi.',
    1894,
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Paul_Gauguin_044.jpg"
  ),
  (
    'Les Joueurs de cartes',
    'Postimpressionnisme',
    N'peinture à l''huile',
    N'Paul Cézanne',
    N'Dans la version à deux personnages, la composition est totalement différente. L''arrière-plan est presque complètement sombre et seules quelques bandes claires offrent un indice sur la localisation, probablement la terrasse couverte d''un café.',
    1895,
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Les_Joueurs_de_cartes_-_Paul_C%C3%A9zanne.jpg"
  ),
  (
    'Les Joueurs de skat',
    N'Nouvelle objectivité',
    N'peinture à l''huile et collage',
    'Otto Dix',
    N'Le tableau représente trois anciens combattants mutilés de la Première Guerre mondiale (des gueules cassées) jouant à un jeu de cartes, le skat, très populaire en Allemagne.',
    1920,
    "https://college-laurent-mourguet.blogs.laclasse.com/wp-content/uploads/sites/585/2013/10/Les-joueurs-de-Skat1.jpg"
  ),
  (
    'Danseuse verte',
    'Impressionnisme',
    'pastel sur papier',
    'Edgar Degas',
    N'Du groupe au premier plan une seule des ballerines est montrée pleine longueur en levant les bras et la jambe gauche dans une pirouette compliquée rapide. Les autres personnes sont raccourcis et nous ne voyons que des fragments de leurs jambes ou des parties de leur tutus, Degas laisse le reste d''entre eux et les étapes qu''ils accomplissent à notre imagination.',
    1879,
    "https://www.degas-catalogue.com/images/446.jpg"
  ),
  (
    N'Jeune fille décoiffée',
    'Haute Renaissance',
    N'grisaille',
    N'Léonard de Vinci',
    N'La Scapigliata ou, selon l''orthographe italienne médiévale, La Scapiliata ou Tête de jeune fille, est une peinture sur bois attribuée à Léonard de Vinci ou à l''un de ses élèves, un travail probablement exécuté entre 1506 et 1508 et conservé à la galerie nationale de Parme en Italie.',
    1508,
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Lascapigliata.jpg?uselang=fr"
  ),
  (
    N'Un matin dans une forêt de pins',
    N'Réalisme',
    N'peinture à l''huile',
    'Ivan Chichkine, Constantine Savitski',
    N'Un matin dans une forêt de pins est un tableau peint par les peintres russes Ivan Chichkine et Constantin Savitski. C''est ce dernier qui a peint les ours, mais le collectionneur Pavel Tretiakov a effacé sa signature. Le tableau est donc attribué uniquement à Chichkine.',
    1889,
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Utro_v_sosnovom_lesu.jpg"
  ),
  (
    'Filles jouant dans le Surf',
    'Impressionnisme',
    N'peinture à l''huile',
    'Edward Henry Potthast',
    N'Le paysage marin intitulé Girls Playing in Surf a été peint par l''artiste américain Edward Henry Potthast . Il est devenu très célèbre après sa mort pour ses représentations impressionnistes des côtes de la Nouvelle-Angleterre et de New York et des personnes qui s''amusent à la plage.',
    1905,
    "https://fr.artsdot.com/ADC/Art-ImgScreen-2.nsf/O/A-8LHS85/$FILE/Edward_henry_potthast-girls_playing_in_surf.Jpg"
  ),
  (
    N'La création d''Adam',
    N'Art chrétien',
    'fresque',
    'Michel-Ange',
    N'La Création d''Adam est l''une des neuf fresques inspirées du livre de la Genèse, peintes par Michel-Ange sur la partie centrale de la voûte du plafond de la chapelle Sixtine, dans les musées du Vatican à Rome, commandée par le pape Jules II.',
    1512,
    "https://m.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/cappella_sistina/02_04_03_Creazione_uomo/_jcr_content/renditions/original.png"
  ),
  (
    'August Blue',
    'Ecole de Newlyn',
    N'peinture à l''huile',
    'Henry Scott Tuke',
    N'August Blue est une peinture à l''huile sur toile de l''artiste britannique Henry Scott Tuke . Il représente quatre jeunes dans et autour d''un bateau, se baignant dans la mer. Tuke a commencé la peinture en 1893, probablement en plein air sur un bateau dans le port de Falmouth, Cornwall .',
    1894,
    "https://upload.wikimedia.org/wikipedia/commons/6/60/Tuke%2C_Henry_Scott_%281858%E2%80%931929%29%2C_%22August_Blue%2C%22_1893.jpg"
  ),
  (
    N'Nu couché',
    'Expressionnisme',
    N'peinture à l''huile',
    'Amedeo Modigliani',
    N'Nu couché également connu en anglais sous le nom de Red Nude ou Reclining Nude, est une huile sur toile de 60,6 × 92,7 cm peinte en 1917 par Amedeo Modigliani. Elle fait partie de ses œuvres les plus célèbres .C''est l''une de ses peintures les plus reproduites et exposées.',
    1917,
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amedeo_Modigliani%2C_1916%2C_Reclining_Nude_%28Nu_couch%C3%A9%29%2C_oil_on_canvas%2C_65.5_x_87_cm%2C_Foundation_E.G._B%C3%BChrle.jpg"
  ),
  (
    N'L''Angélus',
    N'Réalisme',
    N'peinture à l''huile',
    N'Jean-François Millet',
    N'Scène champêtre de peinture de paysage et de vie paysanne réaliste, elle représente un couple de paysans de la plaine de Bière pose ses outils de travaux de champs de pomme de terre, à la tombée du jour, pour la prière de l''angélus sonnée au loin par le clocher de l''église Saint-Paul de Chailly-en-Bière en Île-de-France.',
    1859,
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Jean-Francois-Millet-the-angelus.jpg"
  ),
  (
    N'La Vierge à l''enfant',
    N'Art sacré',
    'tempera',
    'Sandro Botticelli',
    N'L''œuvre reprend la représentation récurrente dans la peinture chrétienne de la Vierge à l''Enfant (ou Madone), présentant la Vierge Marie avec l''Enfant Jésus.',
    1467,
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/BotticelliMadonnaConBambinoAvignone.jpg"
  ),
  (
    'La Lippina',
    N'Art sacré',
    'tempera sur bois',
    'Fra Filippo Lippi',
    N'Les circonstances de la commande et la datation de l''œuvre sont inconnues car il n''existe aucun document contemporain la concernant. Le visage de la Vierge serait le portrait de Lucrezia Buti, la religieuse carmélite qui lui servait de modèle.',
    1465,
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Lippi_-_Madonna_mit_Kind_und_zwei_Engel.jpeg"
  ),
  (
    N'La valse ou Soirée dansante',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Anders Leonard Zorn',
    N'Danse de société.',
    1891,
    "https://cdn.shopify.com/s/files/1/0549/9656/6169/products/b58fd22f7c43cf84e4a2514ef1ed9ee9_2000x.jpg?v=1626693339"
  ),
  (
    'Place Saint-Marc',
    'Veduta',
    N'peinture à l''huile',
    'Canaletto',
    N'L''œuvre présente une des images les plus caractéristiques de la ville italienne, la place Saint-Marc avec la basilique Saint-Marc au fond et son campanile.',
    1724,
    "https://upload.wikimedia.org/wikipedia/commons/6/66/Canaletto_-_The_Piazza_San_Marco_in_Venice_-_Google_Art_Project.jpg"
  ),
  (
    'Le Cercle magique',
    N'Préraphaélisme',
    N'peinture à l''huile',
    'John William Waterhouse',
    N'La femme représentée sur le tableau est probablement une sorcière ou une prêtresse, et est peut-être dotée de pouvoirs magiques tels que le pouvoir de prophétie.',
    1886,
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG"
  ),
  (
    'Danseuses',
    'Symbolisme',
    N'peinture à l''huile',
    'Franz von Stuck',
    N'Danseuses est une célèbre peinture à l''huile de l''artiste allemand Franz von Stuck en 1896, dans un style d''art nouveau réprésentant deux femmes nues et libres.',
    1896,
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Franz_Von_Stuck_-_Dancers.jpg"
  ),
  (
    N'Le Radeau de La Méduse',
    'Romantisme',
    N'peinture à l''huile',
    N'Théodore Géricault',
    N'Ce tableau, de très grande dimension (491 cm de hauteur et 716 cm de largeur), représente un épisode tragique de l''histoire de la marine coloniale française : le naufrage de la frégate Méduse.',
    1819,
    "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg"
  ),
  (
    'Le Fils de l''homme',
    N'Surréalisme',
    N'peinture à l''huile',
    N'René Magritte',
    N'On y voit un homme debout devant un mur et un paysage marin, ayant une pomme verte devant le visage, seul son œil gauche apparait. L''homme en veste noire et au chapeau melon est l''un des personnages typiques de la peinture magritienne.',
    1964,
    "https://www.kazoart.com/blog/wp-content/uploads/2018/03/dee57ad75209d0e6476823cf884161ef.jpg"
  ),
  (
    'Diptyque Marilyn',
    'Pop art',
    N'sérigraphie',
    'Andy Warhol',
    N'Andy Warhol décide de peindre le Diptyque Marilyn quelques semaines après la mort de Monroe. Il trouvait en elle une fusion de deux thèmes constants : la mort et le culte de la célébrité. En recopiant la même image plusieurs fois, il évoque sa présence dans les médias.',
    1962,
    "https://m.media-amazon.com/images/I/714jlOOKCHS._AC_SX679_.jpg"
  ),
  (
    'Guernica',
    'Cubisme',
    N'peinture à l''huile',
    'Pablo Picasso',
    N'Cette toile monumentale est une dénonciation engagée du bombardement de Guernica, qui venait de se produire le 26 avril 1937, lors de la guerre d''Espagne, ordonné par les nationalistes espagnols et exécuté par des troupes allemandes nazies et fascistes italiennes.',
    1937,
    "https://static.nationalgeographic.fr/files/styles/image_3200/public/Main_Guernica_BAT-10313.webp?w=1600&h=900"
  ),
  (
    N'La Colonne brisée',
    N'Art naïf',
    N'peinture à l''huile et isorel',
    'Frida Kahlo',
    N'L''œuvre a été réalisée par Kahlo après qu''elle ait subi une opération de la colonne vertébrale en raison des blessures qu''elle avait subies après un accident de bus en 1925, la contraignant à porter un corset en plâtre qui lui causait d''intenses douleurs.',
    1944,
    "https://arthive.net/res/media/img/oy1200/work/edd/264845.webp"
  ),
  (
    'Boulevard Montmartre, Effet de nuit',
    'Impressionnisme',
    N'peinture à l''huile',
    'Camille Pissarro',
    N'En février 1897, Pissarro a pris une chambre d''hôtel à l''angle du boulevard des Italiens et de la rue Drouot, au Grand Hôtel de Russie, à l''invitation de son galériste Durand-Ruel, afin de produire une série de peintures du boulevard Montmartre à différents moments de la journée. Ce tableau est la seule scène de nuit de cette série. Pissarro ne l''a ni signé, ni exposé de son vivant.',
    1897,
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Camille_Pissarro_009.jpg"
  ),
  (
    'Un bon vent',
    N'Réalisme',
    N'peinture à l''huile',
    'Winslow Homer',
    N'Il représente un catboat appelé le Gloucester traversant le port de cette ville sous "un vent favorable". À l''intérieur du bateau se trouvent un homme, trois garçons et leurs prises.',
    1876,
    "https://www.paintingmania.com/arts/winslow-homer/large/breezing-up-fair-wind-185_20467.jpg?version=12.03.01"
  ),
  (
    'L''Astronome',
    'Baroque',
    N'peinture à l''huile',
    'Johannes Vermeer',
    N'Le tableau est un des quatre seuls de Vermeer, avec L''Entremetteuse (1656) et Le Géographe (1669), à comporter une date — en excluant le très controversé Sainte Praxède (1655).',
    1668,
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg"
  ),
  (
    'Autoportrait',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Van Gogh a envoyé le tableau à son frère cadet, le marchand d''art Theo ; une lettre d''accompagnement disait: "Vous aurez besoin d''étudier [la photo] pendant un certain temps. J''espère que vous remarquerez que mes expressions faciales sont devenues beaucoup plus calmes, bien que mes yeux aient le même regard peu sûr qu''avant, du moins c''est ce qu''il me semble.',
    1889,
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Self-Portrait_%28Van_Gogh_September_1889%29.jpg"
  ),
  (
    N'Autoportrait à l''oreille bandée et à la pipe',
    'Postimpressionnisme',
    N'peinture à l''huile',
    'Vincent van Gogh',
    N'Le 23 décembre 1888, dans leur atelier d''Arles, Van Gogh a tenté de blesser Paul Gauguin avant de se couper l''oreille avec une lame de rasoir. Rapidement rétabli, Van Gogh peint son autoportrait, l’oreille gauche blessée étant pansée par un bandage qui lui entourait le visage.',
    1889,
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Self-Portrait_with_Bandaged_Ear_and_Pipe20.jpg"
  ),
  (
    N'Un bar aux Folies Bergère',
    'Impressionnisme',
    N'peinture à l''huile',
    N'Édouard Manet',
    N'La scène, contrairement aux apparences, n''a pas été peinte au bar des Folies Bergère mais a été entièrement recréée en atelier. La jeune femme servant de modèle, Suzon, est en revanche une véritable employée de ce célèbre café-concert.',
    1882,
    "https://upload.wikimedia.org/wikipedia/commons/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg"
  ),
  (
    N'Un dimanche après-midi à l''Île de la Grande Jatte',
    'Pointillisme',
    N'peinture à l''huile',
    'Georges Seurat',
    N'Cette oeuvre a été rendue célèbre par les peintres impressionnistes qu''elle a inspirés, en particulier Claude Monet, Vincent van Gogh et Alfred Sisley et bien sûr son peintre Seurat.Ce tableau de grand format se caractérise par des tons froids et une technique de division de la touche, appelée couramment pointilliste.',
    1886,
    "https://www.larousse.fr/encyclopedie/data/images/1310223-Georges_Seurat_Un_dimanche_apr%c3%a8s-midi_%c3%a0_la_Grande_Jatte.jpg"
  ),
  (
    'Grand dragon rouge',
    'Impressionnisme',
    'aquarelle',
    'William Blake',
    N'Durant cette période, Blake fut chargé de créer plus d''une centaine de peintures pour illustrer des livres de la Bible. En particulier, cette tétralogie s''appuie sur la description du Grand Rouge de l''Apocalypse.',
    1810,
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Reddragon.jpg"
  ),
  (
    N'L\'Ange Déchu',
    N'Académisme',
    N'peinture à l''huile',
    'Alexandre Cabanel',
    N'Dépeignant un ange expulsé du ciel par Dieu, la toile représente Lucifer attristé (mains croisées, larmes).',
    1847,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cabanel-L%27ange_d%C3%A9chu.JPG/800px-Cabanel-L%27ange_d%C3%A9chu.JPG?20130720135725"
  ),
  (
    N'Métamorphose de Narcisse',
    N'Surréalisme',
    N'peinture à l''huile',
    'Salvador Dali',
    N'La toile, peinte en pleine période surréaliste dans les années 1936 et 1937, représente une scène du mythe de Narcisse, dont le détail est rapporté par Ovide dans ses Métamorphoses.',
    1937,
    "https://img.over-blog-kiwi.com/1/47/74/15/20150329/ob_7984ee_dali-metamorphosis-de-narcisse.jpg"
  ),
  (
    N'Eclipse',
    N'Réalisme moderne',
    N'peinture à l''huile',
    'Anne Magill',
    N'Anne Magill est née dans le comté de Down, en Irlande du Nord, en 1962. Elle a étudié à Liverpool avant de déménager à Londres pour terminer ses études à la St Martin\'s School of Art. Après avoir obtenu son diplôme en 1984, Anne Magill a travaillé comme illustratrice où elle s\'est rapidement forgée une réputation pour ses dessins évocateurs au fusain et au pastel, remportant quatre fois les B&H Gold Illustration Awards.',
    2004,
    "https://annemagill.com/wp-content/uploads/2021/04/23.-Eclipse-2004-Oil-on-board-60-x-60cm--e1621257876935.jpeg"
  );

  CREATE TABLE
    oeuvres (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        livres_id INT,
        tableaux_id INT
    );

INSERT INTO
    oeuvres (
        id,
        livres_id,
        tableaux_id
    )
VALUES (
        1,
        1,
        1
    );

CREATE TABLE
    administrateur (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        identifiant VARCHAR(255) NOT NULL,
        motDePasse VARCHAR(255) NOT NULL
    );

INSERT INTO
    administrateur (
        id,
        identifiant,
        motDePasse
    )
VALUES (
        1,
        "BarzaGuignol",
        "JeSuisUnNez2023"
    );