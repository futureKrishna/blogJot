import { useDispatch } from "react-redux";
import { setUsers } from "./rtk/features/userSlice";
import { setAllBlogs } from "./rtk/features/blogSlice";

function DummyData() {
  const userData = [
    {
      id: 1,
      name: "Atmanand Varman",
      email: "varman_atmanand@murphy-smitham.org",
      gender: "female",
      type: "viewer",
    },
    {
      id: 2,
      name: "Miss Acaryatanaya Devar",
      email: "miss_acaryatanaya@hegmann.org",
      gender: "male",
      type: "editor",
    },
    // {
    //   id: 3,
    //   name: "Devajyoti Nair DC",
    //   email: "nair_devajyoti@wolff.name",
    //   gender: "male",
    //   type: "viewer",
    // },
    // {
    //   id: 4,
    //   name: "Dhananjay Jain",
    //   email: "dhananjay_jain@johns.org",
    //   gender: "female",
    //   type: "editor",
    // }
  ];

  const allBlogs = [
    {
      user_id: 1,
      title: "Ademptio aperio appositus",
      body: "Audentia thesis depono. Ut cresco cernuus. Vir et umerus. Amaritudo statua dolores. Consectetur abduco coepi. Debilito thesis talus. Ter venia ad. Cras occaecati caste. Sopor succurro aufero. Aut thymum comedo. Deputo triduana quos. Carus adulescens arguo. Alioqui curiositas tribuo. Tepidus apto uterque. Communis toties allatus. Comedo angustus est. Supellex adsuesco tempore.",
    },
    {
      user_id: 2,
      title: "Utrimque custodia molestiae",
      body: "Animi ullam angulus. Vorax coepi sopor. Textor earum tonsor. Theologus suspendo vulpes. Ab cogo testimonium. Turba virtus rerum. Cum ciminatio animi. Copia et aduro. Omnis repellat amita. Sublime tollo curvus. Appositus depopulo censura. Audax thorax delectatio. Ascisco altus libero. Recusandae iure dapifer. Casso claro abeo. Tui ars adulescens. Cunctatio sint cras. Dens temptatio compono. Vigor amplitudo baiulus. Trepide accusator porro. Collum cupio et. Solutio approbo truculenter.",
    },
    {
      user_id: 1,
      title: "thymbra contego ago.",
      body: "Ater calcar cunae. Eaque decipio adipiscor. Curvus versus crustulum. Sodalitas convoco sit. Enim solium spes. Delibero cuius vulticulus. Comedo vulnero delectatio. Cupiditas laboriosam amaritudo. Capio thema tonsor. Minus stips thalassinus. Umbra incidunt suggero. Sed arbor claudeo. Sollicito statim vigilo. Desipio venustas tempora. Vere campana dicta. Verbera universe sui.",
    },
    {
      user_id: 2,
      title: "Debitis aegre",
      body: "Paens ad vallum. Cuppedia volubilis decimus. Agnosco aut cubicularis. Delectus ulciscor bibo. Ea fuga delinquo. Cimentarius textor vicinus. Viduata acervus currus. Vindico cavus attero. Attonbitus ventus caute. Creta sperno aegrotatio. Omnis eos ulterius. Pecus aptus explicabo. Aspicio dignissimos convoco. Volutabrum titulus casus. Creta officia amicitia. Aeneus comptus consequuntur.",
    },
    {
      user_id: 1,
      title: "Sursum",
      body: "Conturbo velit desino. Balbus cupio tripudio. Deserunt magni theca. Supplanto commodo esse. Eaque bos eveniet. Unde varietas subnecto. Nobis curiositas minima. Unde adflicto commemoro. Sumo alioqui distinctio. Armarium vaco denego. Admitto casus impedit. Despirmatio error trado. Commemoro tempore totam. Appono conspergo virga. Curatio voluptatem coerceo. Bestia tutis adsidue. Torrens aeternus vespillo. Avarus exercitationem suffoco. Coadunatio casus cedo. Caute sonitus arma.",
    },
    {
      user_id: 2,
      title: "Tabella tactus summisse amiculum",
      body: "Alius abbas vinco. Pecus adulescens cauda. Qui fugiat labore. Temeritas vehemens voluntarius. Careo argumentum defendo. Fugiat commemoro crapula. Vulgivagus dolorem agnitio. Super cito aut. Confero summa umquam. Id ceno depopulo. Vestrum maxime adipisci. Apparatus vulgivagus tabernus. Super asporto solvo. Verbera cometes cultellus. Demens ait clam. Tergiversatio ars antepono. Minus inventore vestrum. Statim curto dolor. Vulnus cumque tricesimus. Thermae benevolentia quia. Adeo curso molestias.",
    },
    {
      user_id: 1,
      title: "Clementia",
      body: "Sopor socius tametsi. Et deprimo iste. Concedo advoco timidus. Ultio antiquus astrum. Tondeo denique repellat. Sint supplanto suffragium. Arbitro sum asperiores. Sodalitas armarium subito. Clarus caelestis adimpleo. Ultio ara vereor. Vacuus vulgaris ager. Alienus caste confugo. Pecco astrum voluptate. Peccatus at allatus. Spiculum cogito cotidie. Vicissitudo cerno conspergo. Cado deripio apparatus. Volaticus communis antea.",
    },
    {
      user_id: 2,
      title: "theologus qui.",
      body: "Cito adicio adfero. Corrupti amplus anser. Curiositas enim crastinus. Concedo dolorum teneo. Summa vos conservo. Audacia adduco canis. Laboriosam commodo quia. Conor decipio subseco. Dolorum dicta sufficio. Desipio currus utilis. Valens custodia assumenda. Acervus deleo aut. Demo pauper conqueror. Dedecor spiculum solutio. Subnecto est ea. Volva voluptas defungo.",
    },
    {
      user_id: 1,
      title: "omnis sortitus sopor venia.",
      body: "Armarium defleo termes. Fugiat copia subiungo. Voluptatem stella appono. Desparatus careo arx. Placeat urbanus succurro. Vix corroboro subnecto. Chirographum quam tui. Solitudo comminor dolorem. Est tero tabella. Suspendo ago molestiae. Abstergo ocer callide. Cavus vobis desidero. Vigor aliquid auctor. Timidus creptio ascisco. Auctus speculum aeneus. Cupio tot pecus. Non ultra tero. Dignissimos vulgo urbanus.",
    },
    {
      user_id: 2,
      title: "Cursim deludo stips in studio",
      body: "Adulescens adultus verbum. Aveho autem solum. Teres ventito tunc. Tristis caelestis colligo. Tandem voluptas ver. Qui culpa cerno. Ascit sperno sunt. Thalassinus tum spero. Cogito curvo charisma. Demoror desino adipiscor. Teres aeneus reprehenderit. Animi color pauci. Defungo cicuta alienus. Absum venustas civis. Appositus deficio conitor. Stillicidium caveo color. Tabgo sol uter. Voluptates amplitudo unde.",
    },
  ];


  const dispatch = useDispatch();
  dispatch(setUsers(userData));
  dispatch(setAllBlogs(allBlogs));
}

export default DummyData;
