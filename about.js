// Handle button actions
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
      if (button.textContent.trim() === "Download CV") {
        // Thay đổi link file CV theo đường dẫn thực tế
        const cvLink = "NguyenMinhHoang.pdf"; // Thay "path/to/your-cv.pdf" bằng đường dẫn thực tế đến file CV
        const link = document.createElement("a");
        link.href = cvLink;
        link.download = "NguyenMinhHoang_CV.pdf"; // Đặt tên file khi tải xuống
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (button.textContent.trim() === "Hire Me") {
        // Điều hướng đến form liên hệ
        window.location.href = "contact.html"; // Thay "contact.html" bằng đường dẫn đến trang liên hệ
      }
    });
  });
  