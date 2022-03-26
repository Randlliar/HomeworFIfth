const me = {
    name: 'Igor',
    surname: 'Sharkevich',
    birthday: '02.10.1999',
    reasonToLearn: 'хочет стать frontend разработчиком.',
    dream: 'все еще стать frontend разработчиком.',
    logName() {
        console.log('Имя: ', this.name)
    },
    logSurname() {
        console.log('Фамилия: ', this.surname)
    },
    logBirthday() {
        console.log('День рождения: ', this.birthday)
    },
    logReasonToLearn() {
        console.log(this.name ,'хочет выучить JS потому что', this.reasonToLearn)
    },
    logDream() {
        console.log(this.name, ' мечтает о' , this.dream)
    },
    logFullInfo(){
        this.logName();
        this.logSurname();
        this.logBirthday();
        this.logReasonToLearn();
        this.logDream();
    },

};

me.logFullInfo();

