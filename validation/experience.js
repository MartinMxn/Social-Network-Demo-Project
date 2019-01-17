//isEmpty isNumer or sth else
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
    let errors = {};

    //if name is empty, in js it'll be undefined,
    //so first convert it to an empty string
    data.title = !isEmpty(data.title) ? data.title : "";
    data.company = !isEmpty(data.company) ? data.company : "";
    data.from = !isEmpty(data.from) ? data.from : "";

    if (Validator.isEmpty(data.title)) {
        errors.title = "Job title field is required";
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = "Company field is required";
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = "From date field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}