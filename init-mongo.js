db.createUser(
    {
        user: "local",
        pwd: "local",
		roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
)