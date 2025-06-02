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
            errors.push('Mật khẩu phải có ít nhất 7 ký tự, bao gồm 1 chữ in hoa và 1 ký tự đặc biệt.');
        }

        if (errors.length > 0) {
            alert('Lỗi:\n' + errors.join('\n'));
        } else {
            alert('Đăng nhập thành công!');
            window.location.href = 'home.html';
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
        const idNumber = document.getElementById('id-number').value.trim();
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        const terms = document.getElementById('terms').checked;
        let errors = [];

        if (!terms) {
            alert('Vui lòng đồng ý với chính sách và điều khoản của chúng tôi.');
            return;
        }

        if (!fullName) {
            errors.push('Họ và tên không được để trống.');
        }

        if (!contact) {
            errors.push('Số điện thoại hoặc email không được để trống.');
        } else if (!validateContact(contact)) {
            errors.push('Số điện thoại hoặc email không hợp lệ.');
        }

        if (!idNumber) {
            errors.push('CCCD không được để trống.');
        } else if (!/^\d{12}$/.test(idNumber)) {
            errors.push('CCCD phải có đúng 12 chữ số.');
        }

        if (!address) {
            errors.push('Địa chỉ không được để trống.');
        }

        if (!password) {
            errors.push('Mật khẩu không được để trống.');
        } else if (!validatePassword(password)) {
            errors.push('Mật khẩu phải có ít nhất 7 ký tự, bao gồm 1 chữ in hoa và 1 ký tự đặc biệt.');
        }

        if (password !== confirmPassword) {
            errors.push('Mật khẩu xác nhận không khớp.');
        }

        if (errors.length > 0) {
            alert('Lỗi:\n' + errors.join('\n'));
        } else {
            alert('Đăng ký thành công!');
            window.location.href = 'signin.html';
        }
    });
}

// Khởi tạo khi trang tải
document.addEventListener('DOMContentLoaded', function() {
    handleSignInForm();
    handleSignUpForm();
});