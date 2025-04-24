"# user_service" 


Suggested APIs (User + Role + Permissions)

👤 User APIs

Method	Endpoint	Description
GET	/users	Get all users (admin only)
GET	/users/:id	Get single user details
POST	/users	Create user (HR/Admin only)
PUT	/users/:id	Update user
DELETE	/users/:id	Delete user
🧑‍💼 Role APIs

Method	Endpoint	Description
GET	/roles	List all roles
POST	/roles	Create role
PUT	/roles/:id	Update role
DELETE	/roles/:id	Delete role
🔐 Permissions APIs

Method	Endpoint	Description
GET	/permissions	List all permissions
POST	/permissions	Create new permission
PUT	/permissions/:id	Update permission
DELETE	/permissions/:id	Delete permission
POST	/roles/:id/permissions	Assign permissions to a role
GET	/users/:id/permissions	Get user's effective permissions



👇 handle in user_service :

✅ 1. Get all active users
GET /api/users

✅ 2. Get single user profile (by ID or from JWT)
GET /api/users/:id

✅ 3. Update profile (name, department, designation)
PUT /api/users/:id

✅ 4. Deactivate / Delete user (soft delete)
PATCH /api/users/:id/deactivate

✅ 5. Change user role (admin only)
PATCH /api/users/:id/role