<template lang="pug">
      
div
      .title-2
        h2 Пройдите предварительную регистрацию , заполнив форму ниже.
        p Для участия в нескольких категориях заполните форму несколько раз.
      
      form.login-form(@submit.prevent="checkForm")
        .flex-row
          input#username-1.lf--input(
            v-model.trim="$v.form.username_1.$model"
            type="username" placeholder='Имя партнера*'
            :class="$v.form.username_1.$error ? 'is-invalid' : ''"
            
            )
          
          
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              
              v-if=" $v.form.username_1.$dirty && !$v.form.username_1.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.username_1.$dirty && !$v.form.username_1.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! В имени должно быть больше 3-х символов.
        .flex-row
          input#surusername-1.lf--input(
            v-model.trim="form.surusername_1"
            type="username"  placeholder='Фамилия партнера*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.surusername_1.$dirty && !$v.form.surusername_1.required "
              )
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.surusername_1.$dirty && !$v.form.surusername_1.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! В фамилии  должно быть больше 3-х символов.
        .flex-row
          input#username-2.lf--input(
            v-model.trim="form.username_2"
            type="username"   placeholder='Имя партнерши*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.username_2.$dirty && !$v.form.username_2.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.username_2.$dirty && !$v.form.username_2.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span Ошибка! В имени должно быть больше 3-х символов.
        .flex-row
          input#surusername-2.lf--input(
            v-model.trim= 'form.surusername_2'
            type="username"    placeholder='Фамилия партнерши*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.surusername_2.$dirty && !$v.form.surusername_2.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.          
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.surusername_2.$dirty && !$v.form.surusername_2.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span Ошибка! В фамилии должно быть больше 3-х символов.
        .flex-row
          input#club.lf--input(
            v-model.trim= 'form.club'
            type="username"   placeholder='Клуб*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.club.$dirty && !$v.form.club.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.          
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.club.$dirty && !$v.form.club.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! В названии клуба должно быть больше 3-х символов.
        .flex-row
          input#coach.lf--input(
            v-model.trim= 'form.coach'
            type="username"  placeholder='Фамилия тренера*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.coach.$dirty && !$v.form.coach.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.                    
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.coach.$dirty && !$v.form.coach.minLength "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! В фамилии должно быть больше 3-х символов.
        .flex-row
          input#town.lf--input(
            v-model.trim= 'form.town'
            type="username"   placeholder='Город*')
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.town.$dirty && !$v.form.town.required "
              ) 
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Это обязательное поле.          
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.town.$dirty && !$v.form.town.minLength "
              )               
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! В названии города должно быть больше 3-х символов.
        .flex-row
          #category.lf--input
            Vselect(
              :options='options'
              @select="OptionSelect"
              :selected='selected'
            )
          v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence
              v-if=" $v.form.category.$dirty && !$v.form.category.required "
              )               
              span.mdi.mdi-alert-octagram-outline
              span  Ошибка! Выберите категорию
        
        v-alert.invalid-fidback(
              colored-border
              type="error"
              elevation="8"
              dence

              v-if="submit==true && !this.$v.form.$error"
              )               
              span.mdi.mdi-alert-octagram-outline
              span Примите поздравления! Регистрация прошла успешно. Вы можете найти свою пару в предварительных списках участников на странице "Кто уже с нами"

        input.lf--submit(
          type='submit' value='Зарегистрироваться'
          )


</template>
  
<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'
import Vselect from '@/components/v-select'

export default {

data(){

return{

form:{
username_1: '',
surusername_1:  '',
username_2: '',
surusername_2:  '',
club: '',
coach:  '',
town: '',
category: '',
},

submit: false,
    options: [
        {
          title: 'Бэби 3-5 лет дебют соло (w,ch)', value: 'Бэби 3-5 лет дебют соло (w,ch)'
        },
        {
          title: 'Бэби 3-5 лет дебют дуэты (w,ch)',value: 'Бэби 3-5 лет дебют дуэты (w,ch)'
        },
        {
          title: 'Бэби 3-5 лет школа соло (w,ch,j)',value: 'Бэби 3-5 лет школа соло (w,ch,j)'
        },
        {
          title: 'Бэби 3-5 лет школа дуэты (w,ch,j)',value: 'Бэби 3-5 лет школа дуэты (w,ch,j)'
        },
        {
          title: 'Дети 6-7 лет дебют соло (w,ch)',value: 'Дети 6-7 лет дебют соло (w,ch)'
        },
        {
          title: 'Дети 6-7 лет дебют дуэты (w,ch)',value: 'Дети 6-7 лет дебют дуэты (w,ch)'
        },
        {
          title: 'Дети 6-7 лет школа соло (w,ch,j)',value: 'Дети 6-7 лет школа соло (w,ch,j)'
        },
        {
          title: ' Дети 6-7 лет школа дуэты (w,ch,j)',value: ' Дети 6-7 лет школа дуэты (w,ch,j)'
        },
        {
          title: 'Дети 6-7 лет начинающие соло (w,q,ch,j)',value: 'Дети 6-7 лет начинающие соло (w,q,ch,j)'
        },
        {
          title: 'Дети 6-7 лет начинающие дуэты (w,q,ch,j)',value: 'Дети 6-7 лет начинающие дуэты (w,q,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  дебют соло (w,ch)',value: 'Ювеналы-1 8-9 лет  дебют соло (w,ch)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  дебют дуэты (w,ch)',value: 'Ювеналы-1 8-9 лет  дебют дуэты (w,ch)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  школа соло (w,ch,j)',value: 'Ювеналы-1 8-9 лет  школа соло (w,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  школа дуэты (w,ch,j)',value: 'Ювеналы-1 8-9 лет  школа дуэты (w,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  начинающие соло (w,q,ch,j)',value: 'Ювеналы-1 8-9 лет  начинающие соло (w,q,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  начинающие дуэты (w,q,ch,j)',value: 'Ювеналы-1 8-9 лет  начинающие дуэты (w,q,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  E-st соло (w,t,q)',value: 'Ювеналы-1 8-9 лет  E-st соло (w,t,q)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  E-la соло (s,ch,j)',value: 'Ювеналы-1 8-9 лет  E-la соло (s,ch,j)'
        },
        {
          title: ' Ювеналы-1 8-9 лет  E-st дуэты (w,t,q)',value: ' Ювеналы-1 8-9 лет  E-st дуэты (w,t,q)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  E-la дуэты (s,ch,j)',value: 'Ювеналы-1 8-9 лет  E-la дуэты (s,ch,j)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  D-st  (w,t,vw,q)',value: 'Ювеналы-1 8-9 лет  D-st  (w,t,vw,q)'
        },
        {
          title: 'Ювеналы-1 8-9 лет  D-la  (s,ch,r,j)',value: 'Ювеналы-1 8-9 лет  D-la  (s,ch,r,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  дебют соло (w,ch)',value: 'Ювеналы-2 10-11 лет  дебют соло (w,ch)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  дебют дуэты (w,ch)',value: 'Ювеналы-2 10-11 лет  дебют дуэты (w,ch)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  школа соло (w,ch,j)',value: 'Ювеналы-2 10-11 лет  школа соло (w,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  школа дуэты (w,ch,j)',value: 'Ювеналы-2 10-11 лет  школа дуэты (w,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  начинающие соло (w,q,ch,j)',value: 'Ювеналы-2 10-11 лет  начинающие соло (w,q,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  начинающие дуэты (w,q,ch,j)',value: 'Ювеналы-2 10-11 лет  начинающие дуэты (w,q,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  E-st соло (w,t,q)',value: 'Ювеналы-2 10-11 лет  E-st соло (w,t,q)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  E-la соло (s,ch,j)',value: 'Ювеналы-2 10-11 лет  E-la соло (s,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  E-st дуэты (w,t,q)',value: 'Ювеналы-2 10-11 лет  E-st дуэты (w,t,q)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  E-la дуэты (s,ch,j)',value: 'Ювеналы-2 10-11 лет  E-la дуэты (s,ch,j)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  D-st  (w,t,vw,q)',value: 'Ювеналы-2 10-11 лет  D-st  (w,t,vw,q)'
        },
        {
          title: 'Ювеналы-2 10-11 лет  D-la  (s,ch,r,j)',value: 'Ювеналы-2 10-11 лет  D-la  (s,ch,r,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет начинающие соло (w,q,ch,j)',value: 'Юниоры-1 12-13 лет начинающие соло (w,q,ch,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет начинающие дуэты (w,q,ch,j)',value: 'Юниоры-1 12-13 лет начинающие дуэты (w,q,ch,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет  E-st соло (w,t,q)',value: 'Юниоры-1 12-13 лет  E-st соло (w,t,q)'
        },
        {
          title: 'Юниоры-1 12-13 лет  E-la соло (s,ch,j)',value: 'Юниоры-1 12-13 лет  E-la соло (s,ch,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет  E-st дуэты (w,t,q)',value: 'Юниоры-1 12-13 лет  E-st дуэты (w,t,q)'
        },
        {
          title: 'Юниоры-1 12-13 лет  E-la дуэты (s,ch,j)',value: 'Юниоры-1 12-13 лет  E-la дуэты (s,ch,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет  D-st  (w,t,vw,q)',value: 'Юниоры-1 12-13 лет  D-st  (w,t,vw,q)'
        },
        {
          title: 'Юниоры-1 12-13 лет  D-la  (s,ch,r,j)',value: 'Юниоры-1 12-13 лет  D-la  (s,ch,r,j)'
        },
        {
          title: 'Юниоры-1 12-13 лет  RS-st  (w,t,vw,f,q)',value: 'Юниоры-1 12-13 лет  RS-st  (w,t,vw,f,q)'
        },
        {
          title: 'Юниоры-1 12-13 лет  RS-la  (s,ch,r,p,j)',value: 'Юниоры-1 12-13 лет  RS-la  (s,ch,r,p,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет начинающие соло (w,q,ch,j)',value: 'Юниоры-2 14-15 лет начинающие соло (w,q,ch,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет начинающие дуэты (w,q,ch,j)',value: 'Юниоры-2 14-15 лет начинающие дуэты (w,q,ch,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет E-st соло (w,t,q)',value: 'Юниоры-2 14-15 лет E-st соло (w,t,q)'
        },
        {
          title: 'Юниоры-2 14-15 лет E-la соло (s,ch,j)',value: 'Юниоры-2 14-15 лет E-la соло (s,ch,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет E-st дуэты (w,t,q)',value: 'Юниоры-2 14-15 лет E-st дуэты (w,t,q)'
        },
        {
          title: 'Юниоры-2 14-15 лет E-la дуэты (s,ch,j)',value: 'Юниоры-2 14-15 лет E-la дуэты (s,ch,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет D-st  (w,t,vw,q)',value: 'Юниоры-2 14-15 лет D-st  (w,t,vw,q)'
        },
        {
          title: 'Юниоры-2 14-15 лет D-la  (s,ch,r,j)',value: 'Юниоры-2 14-15 лет D-la  (s,ch,r,j)'
        },
        {
          title: 'Юниоры-2 14-15 лет RS-st  (w,t,vw,f,q)',value: 'Юниоры-2 14-15 лет RS-st  (w,t,vw,f,q)'
        },
        {
          title: 'Юниоры-2 14-15 лет RS-la  (s,ch,r,p,j)',value: 'Юниоры-2 14-15 лет RS-la  (s,ch,r,p,j)'
        },
        {
          title: 'Юниоры-1+2 12-15 лет  дебют соло (w,ch)',value: 'Юниоры-1+2 12-15 лет  дебют соло (w,ch)'
        },
        {
          title: 'Юниоры-1+2 12-15 лет  дебют дуэты (w,ch)',value: 'Юниоры-1+2 12-15 лет  дебют дуэты (w,ch)'
        },
        {
          title: 'Юниоры-1+2 12-15 лет  школа соло (w,ch,j)',value: 'Юниоры-1+2 12-15 лет  школа соло (w,ch,j)'
        },
        {
          title: 'Юниоры-1+2 12-15 лет  школа дуэты (w,ch,j)',value: 'Юниоры-1+2 12-15 лет  школа дуэты (w,ch,j)'
        },
        {
          title: 'Молодежь 16-19 лет D-st  (w,t,vw,q)',value: 'Молодежь 16-19 лет D-st  (w,t,vw,q)'
        },
        {
          title: 'Молодежь 16-19 лет D-la  (s,ch,r,j)',value: 'Молодежь 16-19 лет D-la  (s,ch,r,j)'
        },
        {
          title: 'Молодежь 16-19 лет RS-st  (w,t,vw,f,q)',value: 'Молодежь 16-19 лет RS-st  (w,t,vw,f,q)'
        },
        {
          title: 'Молодежь 16-19 лет RS-la  (s,ch,r,p,j)',value: 'Молодежь 16-19 лет RS-la  (s,ch,r,p,j)'
        }
    ],
    selected: 'Выберите категорию*'
  }
  },

 validations: {
    form: {
username_1: {required,minLength: minLength(3)
},
surusername_1:{  required,
  minLength: minLength(3)},
username_2: {  required,
  minLength: minLength(3)},
surusername_2:  {  required,
  minLength: minLength(3)},
club: {  required,
  minLength: minLength(3)},
coach:  {  required,
  minLength: minLength(3)},
town: {  required,
  minLength: minLength(3)},
category: { 
  required, 
   },
}
    },
      components:  {
        Vselect
      },
      methods: {
        OptionSelect(option){
this.selected= option.title
this.form.category= option.title
        },
        checkForm(){
          this.$v.form.$touch()
          if (!this.$v.form.$error) {
            console.log("валидация прошла успешно")
          }
        }
       
      }
    }
  
</script>
  
<style	lang="sass" >
.v-alert
  font-size: 1rem
  color: #f5f5f5 
  font-family: Poppins, sans-serif
  background: #90A4AE
  border: .1rem solid #000000
  text-shadow:  0 0 .3rem #000000
  margin: .5rem 0 2rem
  padding: 0 0 0 0!important 	
.lf--submit
  color: #f5f5f5!important  
  font-family: Poppins, sans-serif

.mdi
  color: red
  font-size: 2rem

.v-alert__content
  display: flex
  align-items: center

.v-alert span
  margin: 0 1rem 

</style>



// ловим select который прилетел из дочернего компонента и подвешиваем к нему обработчик  @select="OptionSelect"
// собственно обработчик
// делаем переменную в дате selected: ''
// делаем в методе обработки вывод текста опции, которая прилетела из дочернего компонента в переменную selected
// methods: {
// optionSelect(option){
// this.selected= option.title
// }
// }
//  p {{selected}}

// дальше пробрасываем пропсой переменную в потомка и там выводим где надо
// Vselect(
              // :options='options'
              // @select="OptionSelect"
              // :selected='selected'
            // )