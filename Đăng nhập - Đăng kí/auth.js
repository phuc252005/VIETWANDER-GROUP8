// toast
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}


// Hàm kiểm tra định dạng email hoặc số điện thoại
function validateContact(contact) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,11}$/;
    return emailRegex.test(contact) || phoneRegex.test(contact);
}

// Hàm kiểm tra mật khẩu
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
    return passwordRegex.test(password);
}

// Xử lý form đăng nhập
function handleSignInForm() {
    const form = document.querySelector('.login-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const contact = document.getElementById('contact').value.trim();
        const password = document.getElementById('password').value.trim();
        let errors = [];

        if (!contact) {
            errors.push('Vui lòng nhập số điện thoại hoặc email.');
        } else if (!validateContact(contact)) {
            errors.push('Số điện thoại hoặc email không hợp lệ.');
        }

        if (!password) {
            errors.push('Vui lòng nhập mật khẩu.');
        } else if (!validatePassword(password)) {
            errors.push('Mật khẩu không hợp lệ. Phải có ít nhất 7 ký tự, 1 chữ in hoa và 1 ký tự đặc biệt.');
        }

        if (errors.length > 0) {
            alert('Đăng nhập thất bại:\n' + errors.join('\n'));
            return;
        }

        // Giả sử kiểm tra thành công — có thể thay bằng gọi API thực tế
        const isLoginSuccess = true; // Giả lập
        if (isLoginSuccess) {
            alert('Đăng nhập thành công!');
            window.location.href = 'Trang Chủ/trangchu.html';
        } else {
            alert('Thông tin đăng nhập không đúng. Vui lòng thử lại.');
        }
    });
}


// Xử lý form đăng ký
function handleSignUpForm() {
    const form = document.querySelector('.registration-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullName = document.getElementById('full-name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const idNumber = document.getElementById('id-number') ? document.getElementById('id-number').value.trim() : '';
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const terms = document.getElementById('terms').checked;

        let errors = [];

        // Kiểm tra toàn bộ form có trống không
        if (!fullName && !contact && !address && !password && !confirmPassword) {
            alert('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        if (!terms) {
            alert('Vui lòng đồng ý với chính sách và điều khoản của chúng tôi.');
            return;
        }

        if (!fullName) {
            errors.push('Vui lòng nhập Họ và Tên.');
        }

        if (!contact) {
            errors.push('Vui lòng nhập Số điện thoại hoặc Email.');
        } else if (!validateContact(contact)) {
            errors.push('Số điện thoại hoặc email không hợp lệ.');
        }

        if (!address) {
            errors.push('Vui lòng nhập Địa chỉ.');
        }

        if (!password) {
            errors.push('Vui lòng nhập Mật khẩu.');
        } else if (!validatePassword(password)) {
            errors.push('Mật khẩu phải có ít nhất 7 ký tự, bao gồm 1 chữ in hoa và 1 ký tự đặc biệt.');
        }

        if (!confirmPassword) {
            errors.push('Vui lòng xác nhận lại mật khẩu.');
        } else if (password && confirmPassword !== password) {
            errors.push('Mật khẩu xác nhận không khớp.');
        }

        if (errors.length > 0) {
            alert('Lỗi:\n' + errors.join('\n'));
        } else {
            const confirmation = confirm('Tạo tài khoản thành công!\n\nChuyển đến trang đăng nhập?');
            if (confirmation) {
                window.location.href = 'signin.html';
            }
        }
    });
}

// Khởi tạo khi trang tải
document.addEventListener('DOMContentLoaded', function() {
    handleSignInForm();
    handleSignUpForm();
});

if (errors.length > 0) {
    alert('Lỗi:\n' + errors.join('\n'));
} else {
    alert('Đăng ký thành công!');
    window.location.href = 'signin.html';
}
