// data.js - User data storage and authentication management

// User database - stored in localStorage for persistence
const UserDB = {
    // Initialize with sample data if empty
    init: function() {
        if (!localStorage.getItem('luxestay_users')) {
            const defaultUsers = [
                {
                    id: '1',
                    phone: '+60123456789',
                    fullName: 'Ahmad Bin Abdullah',
                    email: 'ahmad.abdullah@email.com'
                }
            ];
            localStorage.setItem('luxestay_users', JSON.stringify(defaultUsers));
        }
    },

    // Generate random username
    generateRandomUsername: function() {
        return 'User' + Math.floor(Math.random() * 900000 + 100000);
    },

    // Get all users
    getUsers: function() {
        const users = localStorage.getItem('luxestay_users');
        return users ? JSON.parse(users) : [];
    },

    // Save users to localStorage
    saveUsers: function(users) {
        localStorage.setItem('luxestay_users', JSON.stringify(users));
    },

    // Find user by phone number
    findUserByPhone: function(phone) {
        const users = this.getUsers();
        return users.find(user => user.phone === phone);
    },

    // Add new user with random username
    addUser: function(phone) {
        const users = this.getUsers();
        const newUser = {
            id: Date.now().toString(),
            phone: phone,
            fullName: this.generateRandomUsername(),
            email: ''
        };
        users.push(newUser);
        this.saveUsers(users);
        return newUser;
    },

    // Update user profile
    updateUser: function(phone, profileData) {
        const users = this.getUsers();
        const index = users.findIndex(user => user.phone === phone);
        if (index !== -1) {
            users[index] = { ...users[index], ...profileData };
            this.saveUsers(users);
            return users[index];
        }
        return null;
    },

    // Get current logged in user
    getCurrentUser: function() {
        const currentUser = localStorage.getItem('luxestay_current_user');
        return currentUser ? JSON.parse(currentUser) : null;
    },

    // Set current logged in user
    setCurrentUser: function(user) {
        if (user) {
            localStorage.setItem('luxestay_current_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('luxestay_current_user');
        }
    },

    // Check if user is logged in
    isLoggedIn: function() {
        return this.getCurrentUser() !== null;
    },

    // Logout user
    logout: function() {
        this.setCurrentUser(null);
    }
};

// Initialize database on load
UserDB.init();