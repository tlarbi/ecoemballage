module.exports = function (faqService) {
    var self = this;

    self.faqs = [];

    this.$onInit = function () {
        faqService.getFaq().then(function (response) {

            //console.log('FAQERRR : ', response);
            for (var index in response.data) {
                if (response.data[index].field_type_faq && response.data[index].field_question && response.data[index].body) {
                    self.faqs.push({
                        mytype: response.data[index].field_type_faq[0].value,
                        myquestion: response.data[index].field_question[0].value,
                        myreponse: response.data[index].body[0].value
                    });
                }
            }
            console.log('FAQQQQ');
            console.log('all:', self.faqs);
        }, function (response) {
            console.log('FAQERRR : ', response);
        });
    }
};