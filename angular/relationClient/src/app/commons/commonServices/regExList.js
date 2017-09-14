module.exports = {
    
    inscription: {
        // EMAIL FORMAT
        //emailRegEx_old: /^[a-zA-Z][a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/,
        emailRegEx: /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/,

        // TELEPHONE FORMAT
        telRegEx: /^(\+[1-9]{3}|0[1-9])([\s]?\d{2}){4}$/,

        // MOT DE PASSE FORMAT
        passRegEx: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{9,}$/,

        // NUMERO CLIENT FORMAT
        clientNumberRegEx: /^\w{3,18}$/,

        // REGELES MOT DE PASSE
        atLeastNineCarRegEx: /^.{9,}$/,
        atLeastMajRegEx: /^(?=.*[A-Z]).{1,}$/,
        atLeastMinRegEx: /^(?=.*[a-z]).{1,}$/,
        atLeastNumRegEx: /^(?=.*[0-9]).{1,}$/,
        atLeastSpecialCarRegEx: /^(?=.*[@#$%^&+=]).{1,}$/
    },
    adhesion: {
        siretRegEx: /^\d{14}$/,
        emailRegEx: /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/
    }
}
