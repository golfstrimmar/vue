<template lang="pug">
div
    .title-2
      h2 Кликните по вкладке с интересующей вас категорией

    .akr
      .akr__wrapper
        ul.akr__body
          baby_3_5_debut_solo(
            )
          baby_3_5_debut_duety(
            )

    //-       li.akr__item.akr-item
    //-         .akr-item__title.akr-title-js
    //-           | Бэби 3-5 лет дебют дуэты (w,ch)
    //-           i.icon-chevron-down.akr-item__img.akr-item-img-js
    //-         .akr__drop.akr-drop.akr-drop-js
    //-           .list
    //-             .list__header
    //-               .list__item Партнер
    //-               .list__item Партнерша
    //-               .list__item Клуб
    //-               .list__item Фамилия тренера
    //-               .list__item Город
    //-           .akr-item__line.line
    //-             span Пупкин Трофим
    //-             span  Дуракова Анфиса
    //-             span  Веселые человечки
    //-             span  Марк Жопов
    //-             span  Кислозадрыщенск
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Бэби 3-5 лет школа соло (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //-     .akr-item__line.line
          //-       span Пупкин Трофим
          //-       span  Дуракова Анфиса
          //-       span  Веселые человечки
          //-       span  Марк Жопов
          //-       span  Кислозадрыщенск
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Бэби 3-5 лет школа дуэты (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //-     .akr-item__line.line
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет дебют соло (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет дебют дуэты (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет школа соло (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет школа дуэты (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет начинающие соло (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Дети 6-7 лет начинающие дуэты (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет дебют соло (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет дебют дуэты (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет школа соло (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет школа дуэты (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет начинающие соло (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет начинающие дуэты (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет E-st соло (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет E-la соло (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет E-st дуэты (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет E-la дуэты (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет D-st (w,t,vw,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-1 8-9 лет D-la (s,ch,r,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет дебют соло (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет дебют дуэты (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет школа соло (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет школа дуэты (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет начинающие соло (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет начинающие дуэты (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет E-st соло (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет E-la соло (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет E-st дуэты (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет E-la дуэты (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет D-st (w,t,vw,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Ювеналы-2 10-11 лет D-la (s,ch,r,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет начинающие соло (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет начинающие дуэты (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет E-st соло (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет E-la соло (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет E-st дуэты (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет E-la дуэты (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет D-st (w,t,vw,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет D-la (s,ch,r,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет RS-st (w,t,vw,f,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1 12-13 лет RS-la (s,ch,r,p,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет начинающие соло (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет начинающие дуэты (w,q,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет E-st соло (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет E-la соло (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет E-st дуэты (w,t,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет E-la дуэты (s,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет D-st (w,t,vw,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет D-la (s,ch,r,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет RS-st (w,t,vw,f,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-2 14-15 лет RS-la (s,ch,r,p,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1+2 12-15 лет дебют соло (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1+2 12-15 лет дебют дуэты (w,ch)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1+2 12-15 лет школа соло (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Юниоры-1+2 12-15 лет школа дуэты (w,ch,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Молодежь 16-19 лет D-st (w,t,vw,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Молодежь 16-19 лет D-la (s,ch,r,j)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
          //-   .akr-item__title.akr-title-js
          //-     | Молодежь 16-19 лет RS-st (w,t,vw,f,q)
          //-     i.icon-chevron-down.akr-item__img.akr-item-img-js
          //-   .akr__drop.akr-drop.akr-drop-js
          //-     .list
          //-       .list__header
          //-         .list__item Партнер
          //-         .list__item Партнерша
          //-         .list__item Клуб
          //-         .list__item Фамилия тренера
          //-         .list__item Город
          //- li.akr__item.akr-item
            .akr-item__title.akr-title-js
              | Молодежь 16-19 лет RS-la (s,ch,r,p,j)
              i.icon-chevron-down.akr-item__img.akr-item-img-js
            .akr__drop.akr-drop.akr-drop-js
              .list
                .list__header
                  .list__item Партнер
                  .list__item Партнерша
                  .list__item Клуб
                  .list__item Фамилия тренера
                  .list__item Город
</template>
  
<script>
import baby_3_5_debut_solo from '@/components/baby-3-5-debut-solo'
import baby_3_5_debut_duety from '@/components/baby-3-5-debut-duety'
export default {

  data(){
    return{
    selected: 'Бэби 3-5 лет дебют соло (w,ch)',
    selected1: 'Бэби 3-5 лет дебют дуеты (w,ch)'
  }
  },
      mounted(){
      },
      components:  {
        baby_3_5_debut_solo,
        baby_3_5_debut_duety
      },
      methods: {
        OptionSelect(option){
            this.selected= option.title
        }
      }
    }
  
</script>
  
<style	lang="sass" scoped>
  
</style>