const StringFormatter = function () {

    const capitalizeFirst = function (string) {
        console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
    };

    const toSkewerCase = function (string) {
        console.log(string.replaceAll(" ", "-"));

    };

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase,
    };

}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box