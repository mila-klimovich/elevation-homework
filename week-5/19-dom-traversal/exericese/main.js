$(".generator").on("click", function() {

    let processorId = $(this).closest("div").attr("id");
    let computer = $(this).closest(".computer");
    let computerId = computer.data().id;
    let busNumber = computer.find(".BUS").text();

    console.log(`Processor ID: ${processorId}`);
    console.log(`Computer’s data-id: ${computerId}`);

    let computerObj = { cmp_id: computerId};
    console.log(computerObj);

    console.log(`BUS: ${busNumber}`);
});

$(".validator").on("click", function() {

    let computer = $(this).closest(".computer");
    let generatorText = computer.find(".generator").text();
    let mb = computer.find(".MB").text();
    let qrs = computer.find(".processor").children(".QR").map(function () {
        return $(this).text();
    }).get();

    console.log("Generator's text:", generatorText);
    console.log("MB:", mb);
    console.log("QRs:", qrs);
});