document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadPdfButton").addEventListener("click", function() {
        const pdf = new jsPDF();

        // Anda perlu mengganti "resumeContent1" dan "resumeContent2" dengan ID elemen yang berisi konten resume Anda
        const resumeContent1 = document.getElementById("resumeContent1").innerHTML;
        const resumeContent2 = document.getElementById("resumeContent2").innerHTML;

        // Menambahkan konten dari elemen 1 ke halaman pertama PDF
        pdf.text(resumeContent1, 10, 10);

        // Menambahkan konten dari elemen 2 ke halaman kedua PDF
        pdf.addPage();
        pdf.text(resumeContent2, 10, 10);

        pdf.save("resume.pdf"); // Anda bisa menamainya sesuai keinginan
    });
});
