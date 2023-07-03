const goods = [
    {
      id: 1,
      title: 'Стул DIUM - DIUM',
      description: 'Мягкий стул с подлокотниками на ножках из натурального бука!',
      images: ['soft-chair-1.jpg', 'soft-chair-2.jpg', 'soft-chair-3.jpg', 'soft-chair-4.jpg'],
      price: '1999',
      class: 'Стулья',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['ВАУ НЕВЕРОЯТНЫЙ CТУЛ', 'ОГО МНЕ ОЧЕНЬ ПОНРАВИЛСЯ ЭТОТ СТУЛ'],
      personalRating: [5, 4]
    },
    {
      id: 2,
      title: 'Кухонный стул',
      description: 'Серебристо-кремовый стул из экокожи, отлично подойдет для кухни',
      images: ['kitchen-chair-1.jpg', 'kitchen-chair-2.jpg', 'kitchen-chair-3.jpg', 'kitchen-chair-4.jpg'],
      price: '1440',
      class: 'Стулья',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['ВАУ НЕВЕРОЯТНЫЙ КУХОННЫЙ СТУЛ', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 3,
      title: 'Детская кровать',
      description: 'Кровать детская с подъёмным механизмом, 90х200 см',
      images: ['kid-bed-1.jpg', 'kid-bed-2.jpg', 'kid-bed-3.jpg', 'kid-bed-4.jpg'],
      price: '11990',
      class: 'Кровати',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 4,
      title: 'Двуспальная кровать',
      description: 'Двуспальная кровать с анатомическим основанием, 180х200 см',
      images: ['two-places-bed-1.jpg', 'two-places-bed-2.jpg', 'two-places-bed-3.jpg', 'two-places-bed-4.jpg'],
      price: '11990',
      class: 'Кровати',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 5,
      title: 'Шкаф большой',
      description: 'Гардеробная система Оскар белый, 200х236х58 см',
      images: ['white-bookshelf-1.jpg', 'white-bookshelf-2.jpg', 'white-bookshelf-3.jpg', 'white-bookshelf-4.jpg'],
      price: '33990',
      class: 'Шкафы',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 6,
      title: 'Шкаф малый',
      description: 'Гардеробная система, фасады дуб Сонома, 75х236х58 см',
      images: ['wooden-bookshelf-1.jpg', 'wooden-bookshelf-2.jpg', 'wooden-bookshelf-3.jpg', 'wooden-bookshelf-4.jpg'],
      price: '21490',
      class: 'Шкафы',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 5]
    },
    {
      id: 7,
      title: 'Стол кухонный',
      description: 'Стол обеденный Раздвижной Дарион-2, 120х68х75 см',
      images: ['kitchen-table-1.jpg', 'kitchen-table-2.jpg', 'kitchen-table-3.jpg', 'kitchen-table-4.jpg'],
      price: '7990',
      class: 'Столы',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 8,
      title: 'Стол школьный',
      description: 'Письменный стол Немо-6, 1334x600x746 мм',
      images: ['school-table-1.jpg', 'school-table-2.jpg', 'school-table-3.jpg', 'school-table-4.jpg'],
      price: '14999',
      class: 'Столы',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
    {
      id: 9,
      title: 'Тумба для обуви',
      description: 'Тумба для обуви Палермо мод.6',
      images: ['tumba-for-boots-1.jpg', 'tumba-for-boots-2.jpg', 'tumba-for-boots-3.jpg', 'tumba-for-boots-4.jpg'],
      price: '5620',
      class: 'Прихожая',
      voted: 3,
      reviewers: ['Виталий Иванов', 'Екатерина М.', 'Beebebe'],
      reviews: ['Невероятный товар', 'Мне очень понравилось', 'i don"t like'],
      personalRating: [5, 4, 2]
    },
    {
      id: 10,
      title: 'Вешалка для одежды',
      description: 'Вешалка настенная В01-800 Норд',
      images: ['veshalka-for-clothes-1.jpg', 'veshalka-for-clothes-2.jpg', 'veshalka-for-clothes-3.jpg', 'veshalka-for-clothes-4.jpg'],
      price: '3175',
      class: 'Прихожая',
      voted: 2,
      reviewers: ['Виталий Иванов', 'Екатерина М.'],
      reviews: ['Невероятный товар', 'Мне очень понравилось'],
      personalRating: [5, 4]
    },
  ];

  goods.forEach((good) => {
    const personalRatingSum = good.personalRating.reduce((sum, rating) => sum + rating, 0);
    const averageRating = (personalRatingSum / good.personalRating.length).toFixed(1);
    good.rating = averageRating;
  });

  export default goods;