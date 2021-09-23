// const express = require("express");
// const app = express();
// const port = 8080;

// var fonts = {
//   Roboto: {
//     normal: "src/fonts/Roboto-Regular.ttf",
//     bold: "src/fonts/Roboto-Medium.ttf",
//     italics: "src/fonts/Roboto-Italic.ttf",
//     bolditalics: "src/fonts/Roboto-MediumItalic.ttf",
//   },
// };

// var PdfPrinter = require("pdfmake");
// var printer = new PdfPrinter(fonts);

// app.get("/", (req, res) => {
//   var docDefinition = {
//     content: [
//       {
//         layout: "lightHorizontalLines", // optional
//         table: {
//           // headers are automatically repeated if the table spans over multiple pages
//           // you can declare how many rows should be treated as headers
//           headerRows: 1,
//           widths: ["*", "auto", 100, "*"],

//           body: [
//             ["First", "Second", "Third", "The last one"], // heading
//             ["Value 1", "Value 2", "Value 3", "Value 4"],
//             [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
//           ],
//         },
//       },
//     ],
//   };

//   res.set("content-type", "application/pdf");
//   var pdfDoc = printer.createPdfKitDocument(docDefinition);
//   // pdfDoc.pipe(fs.createWriteStream("document.pdf"));
//   pdfDoc.pipe(res);
//   pdfDoc.end();
//   // res.send("ok!!!");
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
