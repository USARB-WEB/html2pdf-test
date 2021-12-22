const exportToPDF = () => {
    const el = document.getElementById("printable");
        html2pdf()
          .from(el)
          .set({
            margin: 1,
            filename: "request.pdf",
            image: { type: "jpeg", quality: 1.0 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: "cm", format: "letter", orientation: "portrait" }
          })
          .toPdf()
          .get("pdf")
          .then((pdf) => {
            //this.pdfCallback(pdf);
          })
          .save();
        //this.printMode = false;
}