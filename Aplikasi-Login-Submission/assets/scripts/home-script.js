/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const buttonLogoutElement = document.querySelector('#buttonLogout');

buttonLogoutElement.addEventListener('click', function() {
    goToLogin(); //menambahkan fungsi goToLogin() agar saat logout halaman berpindah ke halaman login kembali
});
