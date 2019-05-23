# from flask import Flask, jsonify, request, json
# # from flask_mysqldb import MySQL
# # import pymysql
# import MySQLdb
# from datetime import datetime
# from flask_cors import CORS
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager
# from flask_jwt_extended import create_access_token

# app = Flask(__name__)

# connection = MySQLdb.connect(host='localhost',
#                              user='root1',
#                              password='',
#                              db='printout_prodb',
#                              charset='utf8mb4',
#                              cursorclass=pymysql.cursors.DictCursor)

# # app.config['MYSQL_USER'] = 'root1'
# # app.config['MYSQL_PASSWORD'] = ''
# # app.config['MYSQL_DB'] = 'printout_prodb'
# # app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
# app.config['JWT_SECRET_KEY'] = 'secret'

# mysql = MySQL(app)
# bcrypt  = Bcrypt(app)
# jwt = JWTManager(app)
# CORS(app)


# @app.route('/users/register', methods=['POST'])
# def register():
#     cur = mysql.connection.cursor()
#     username = request.get_json()['username']
#     email = request.get_json()['email']
#     password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
#     created = datetime.utcnow()

#     cur.executed("INSERT INTO users (username, email, password, created) VALUES ('"+
#         str(username) + "','" +
#         str(email) + "','" +
#         str(password) + "','" +
#         str(created) + "')")
#     mysql.connection.commit()

#     result = {
#         'username': username,
#         'email': email,
#         'password':password,
#         'created': created
#     } 

#     return jsonify({'result': result})


# @app.route('/users/login', methods=['POST'])
# def login():
#     cur = mysql.connection.cursor()
#     username = request.get_json()['username']
#     password = request.get_json()['password']
#     result = ""

#     cur.execute("SELECT * FROM where username = '" + str(username) +"'")
#     rv = cur.fetchone()

#     if bcrypt.check_password_hash(rv['password'], password):
#         access_token = create_access_token(identity = {'username': rv['username'],'email': rv['email']})
#         result  = jsonify({"token":access_token})
#     else:
#         result = jsonify({"error": "Invalid username and password"})

#     return result



# if __name__=='_main_':
#     app.run(debug=True)

# # from flask import Flask
# # app = Flask(__name__)

# # @app.route("/")
# # def hello():
# #   return "Hello World!"

# # if __name__ == "__main__":
# #   app.run()















