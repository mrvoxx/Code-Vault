# 🍃 MongoDB Shell (mongosh) – Command Cheat Sheet

A clean, beginner‑friendly README to remember **what command does what**, **what happens after you run it**, and **what output to expect**.

---

## 🔍 Show all databases

```js
show dbs
```

📌 **What it does:** Lists all existing databases on the MongoDB server.

🖥️ **Sample Output:**

```
admin    40.00 KiB
config  108.00 KiB
local    40.00 KiB
websiteDB  8.00 KiB
```

---

## 📂 Switch to / Create a Database

```js
use admin
```

or

```js
use websiteDB
```

📌 **What it does:**

* Switches to the given database
* If it doesn’t exist, MongoDB **prepares** it (creates only after data insert)

🖥️ **Output:**

```
switched to db websiteDB
```

---

## 🗃️ Create a Collection (Table)

```js
db.createCollection("student")
```

📌 **What it does:** Creates a new collection named `student`.

🖥️ **Output:**

```
{ ok: 1 }
```

---

## ❌ Drop / Delete Current Database

```js
db.dropDatabase()
```

📌 **What it does:** Permanently deletes the **current database**.

⚠️ **Warning:** This cannot be undone.

🖥️ **Output:**

```
{ ok: 1, dropped: 'websiteDB' }
```

---

## ➕ Insert ONE Document (Row)

```js
db.student.insertOne({
  name: "Ashwin",
  class: 12,
  section: "D"
})
```

📌 **What it does:** Inserts a single document into `student` collection.

🖥️ **Output:**

```
{
  acknowledged: true,
  insertedId: ObjectId("65bf9...")
}
```

---

## ➕➕ Insert MULTIPLE Documents

```js
db.student.insertMany([
  { name: "Ashwin", class: 12, section: "D" },
  { name: "Rahul", class: 11, section: "A" },
  { name: "Neha", class: 10, section: "C" }
])
```

📌 **What it does:** Inserts many documents at once.

🖥️ **Output:**

```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("..."),
    '1': ObjectId("..."),
    '2': ObjectId("...")
  }
}
```

---

## 👀 Read / View All Documents

```js
db.student.find()
```

📌 **What it does:** Fetches all documents from `student` collection.

🖥️ **Output:**

```
{ _id: ObjectId("..."), name: 'Ashwin', class: 12, section: 'D' }
{ _id: ObjectId("..."), name: 'Rahul', class: 11, section: 'A' }
```

✨ Prettier view:

```js
db.student.find().pretty()
```

---

## 🔎 Find with Condition

```js
db.student.find({ class: 12 })
```

📌 **What it does:** Shows only students from class 12.

---

## 🧮 Count Documents

```js
db.student.countDocuments()
```

📌 **What it does:** Returns total number of documents.

🖥️ **Output:**

```
3
```

---

## 🧹 Delete Documents

### Delete ONE

```js
db.student.deleteOne({ name: "Ashwin" })
```

### Delete MANY

```js
db.student.deleteMany({ class: 10 })
```

---

## 🧨 Drop Collection (Table)

```js
db.student.drop()
```

📌 **What it does:** Deletes the entire collection.

🖥️ **Output:**

```
true
```

---

## 🧠 Pro Tips

* MongoDB is **schema‑less** 🧬
* Database is created **only after first insert**
* `_id` is auto‑generated if not provided
* Collections ≈ Tables, Documents ≈ Rows

---

## 🚀 Next Level Topics (Optional)

* Indexes 📈
* Aggregation Pipeline 🔗
* Mongoose with Node.js 🧩
* MongoDB Atlas ☁️

---

Happy hacking, Ashwin 😄🍃
