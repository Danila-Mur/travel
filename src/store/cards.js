const cards = {
  state: {
    cards: [
      {
        id: 0,
        image: 'mount.jpeg',
        name: 'Новогодний Дагестан',
        description:
          ' Преимущество этого путешествия: отметим Новый год в теплой компании, на берегу Каспийского моря; гастрономические изыски – отведаем национальные блюда в лучших заведениях республики; быт и культура Северного Кавказа – посетим древнейшие города и селения, знаменитые мечети, музеи, боевые крепости и многое другое; побываем один из главных историко-культурных центров Дагестана – селение Ахты. ',
      },
      {
        id: 1,
        image: '2.jpg',
        name: 'Новый год в Териберке на берегу океана',
        description:
          'Водопад и береговая батарея Подъём в 08:00. Завтрак в 09:00. Выход на маршрут в 10:00. Сегодня в программе\n' +
          '          пеший радиальный выход на северо-запад по побережью к териберскому водопаду и позициям артиллерийской\n' +
          '          береговой батареи времён Великой Отечественной войны. Возвращение в гостиницу к 16:00 – 17:00. Ужин около\n' +
          '          18:00. В тёмное время суток будем охотиться за Полярным сиянием. Протяженность: от 10 до 20 км пешком за день\n' +
          '          (на усмотрение гида и по согласования с участниками тура). Старая Териберка Подъём в 08:00. Завтрак в 09:00.\n' +
          '          Выход на маршрут в 10:00. Сегодня группу ждёт пеший радиальный выход на юго-восток по побережью, посещение губ\n' +
          '          Орловка и Завалишина, живописная дорога к Териберскому полуострову. На этом маршруте группа проходит «старую»\n' +
          '          Териберку и её основные достопримечательности: кладбище кораблей, заброшенные больницу и школу, выброшенное\n' +
          '          штормом рыболовецкое судно и песчаные пляжи. С 20:00 мониторим прогнозы по сиянию, готовые выбежать на улицу и\n' +
          '          наслаждаться небесным светопредставлением.',
      },
      {
        id: 2,
        image: 'elbrus.jpeg',
        name: 'Восхождение на Эльбрус на Новый год',
        description:
          'Первый день акклиматизации. Выход к водопаду «Девичьи Косы» и к Обсерватории РАН Трансфер Пятигорск – пос.\n' +
          '          Терскол в 9 утра (ориентировочно 3-4 часа по горной дороге в Баксанское ущелье). Размещение в гостевом доме в\n' +
          '          пос. Терскол. Выход в высокогорную зону для акклиматизации. Подъем к водопаду «Девичьи Косы» и далее (по\n' +
          '          самочувствию, погоде) к обсерватории Российской Академии Наук (3000 метров). Путь проходит через сосновый лес,\n' +
          '          базальтовые скульптуры – отличные места для фотосъемки. Решение о маршруте принимается гидом в зависимости от\n' +
          '          состояния самого маршрута, прогноза погоды, самочувствия группы. Налюбовавшись прекрасными видами – спускаемся\n' +
          '          в Терскол. Ужин. Ночевка в гостевом доме в поселке Терскол. Подъем на склоны г. Чегет-Тау-Чана (в\n' +
          '          простонародье — Чегет) до высоты — 3000 метров Грамотная акклиматизация – залог успешного восхождения, поэтому\n' +
          '          сегодня продолжаем подъем. После завтрака, поднимаемся на склоны горы Чегет для высоты 3000 метров. Поднявшись\n' +
          '          наверх, мы увидим Западную и Восточную вершины Эльбруса, а также весь маршрут восхождения. Здесь – станция\n' +
          '          Чегетской канатной дороги и кафе «Ай», где можно отведать блюда национальной кухни, горный чай и знаменитые\n' +
          '          пирожки с мясом и брусникой. На подъеме рекомендуется не пользоваться подъемниками, т.к. лучшие результаты\n' +
          '          достигаются при физической нагрузке. После прогулки и обеда, ваш горный гид поможет разобраться с необходимым\n' +
          '          снаряжением для подъема на гору.',
      },
      {
        id: 3,
        image: 'crimea.jpeg',
        name: 'Праздничный Крым. Новый год в Севастополе',
        description:
          'Встреча группы. Экскурсия по Бахчисараю. Празднование Нового года в Севастополе Встреча гостей: на ж/д вокзале\n' +
          '          г. Симферополя с 10:00 до 10:30 (внутренний дворик вокзала, возле фонтана «Голуби»); в аэропорту г.\n' +
          '          Симферополя с 11:30 до 12:00 (справа от выхода из здания терминала (снаружи здания), над выходом – наружная\n' +
          '          надпись: «Симферополь»). Трансфер в Бахчисарай – историческую столицу Крымского ханства, расположенную в\n' +
          '          окруженной Крымскими горами живописной долине реки Чурук-Су. Обед (с элементами крымско-татарской кухни) и\n' +
          '          дегустация крымских вин разных марок. Знакомство с дворцовым комплексом Ханского дворца – резиденцией династии\n' +
          '          Гиреев и единственным в мире образцом крымско-татарской архитектуры и быта: дворцовая мечеть, зал Совета и\n' +
          '          Суда, гарем, прославленный Пушкиным Фонтан слез, Золотой фонтан, Персидский дворик. По желанию, на выбор,\n' +
          '          предлагаем посетить (доп.плата, к месту проведения факультативных экскурсий туристы добираются\n' +
          '          самостоятельно): музей с мини-зоопарком «Крым на ладони» – самый большой в Крыму парк миниатюр, где собраны\n' +
          '          все историко-культурные и архитектурные достопримечательности полуострова; Свято-Успенский пещерный монастырь\n' +
          '          и святой источник в ущелье Марьям-Дере (самостоятельно); кофейню-музей «Дегирмен», где вы увидите макет\n' +
          '          древнего Бахчисарая, который оживает благодаря эффектам света и звука, а также попробовать вкуснейший\n' +
          '          восточный кофе. Переезд в Севастополь через Инкерман, путевая информация о Свято-Климентском пещерном\n' +
          '          монастыре и обзор средневековой крепости Каламита. Размещение в одной из гостиниц города. Празднование Нового\n' +
          '          года в обстановке уличного гулянья в центре Севастополя на площади Нахимова (самостоятельно).',
      },
      {
        id: 4,
        image: 'polar.jpg',
        name: 'Три дня за Полярным кругом',
        description:
          'Мурманск, охота за северным сиянием (с сентября по апрель) Завтрак в отеле для проживающих в отеле по\n' +
          '          программе. 09:00 Встреча с группой у отеля «Меридиан» на площади Пять Углов. Заезд в отель «Огни Мурманска».\n' +
          '          Переезд в поселок Териберка. Мы на целый день уедем в уже ставшую легендой Териберку. Магическая красота\n' +
          '          здешних мест завораживает любого путника. Экскурсия на водопад, каменный пляж «яйца драконов» (подвозка на\n' +
          '          снегоходе к месту начала экскурсии с декабря по апрель). Путешествие в северную сказку, где старые корабли\n' +
          '          видят сны о прошлом, водопад сверкает застывшими льдами, а пляж из «яиц драконов» поражает своим размахом.\n' +
          '          Мистические камни-сейды молчаливо хранят тысячелетние тайны, а взору предстают неповторимые и удивительные\n' +
          '          пейзажи! Обед традиционной кухни в ресторане. Свободное время. Возвращение в Мурманск. Трансфер к отелям «Огни\n' +
          '          Мурманска», «Меридиан». Отдых',
      },
      {
        id: 5,
        image: 'altay.jpg',
        name: 'Зимний Алтай',
        description:
          'Зубрятник – Камышлинский водопад Завтрак в кафе «Таежник» После завтрака выезд на экскурсию. Первым объектом\n' +
          '          посещения станет территория всесезонного курорта «Манжерок». Посещение Манжерокского озера, которое находится\n' +
          '          недалеко от села Манжерок, у подножья гор Синюха и Малая Синюха. Затем на гондольном подъемнике подниметесь на\n' +
          '          обзорную площадку горы Синюха, откуда открывается красивая панорама долины реки Катунь. Переезд до зубрятника,\n' +
          '          где есть возможность полюбоваться грациозными маралами и величественными, суровыми зубрами. Обед в кафе на\n' +
          '          территории туркомплекса “Берендеевка” Переезд до с.Барангол. Пешая экскурсия на Камышлинский водопад.\n' +
          '          Возвращение в «Таежник». Ужин. Вечером Мастер-класс по завариванию Алтайского чая и приготовлению алтайских\n' +
          '          сладостей ток-чок. Протяженность: на авто – 50 км, пешком – 5 км.',
      },
    ],
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getCardsById(state) {
      return (id) => {
        return state.cards.find((card) => card.id === +id);
      };
    },
  },
};

export default cards;
