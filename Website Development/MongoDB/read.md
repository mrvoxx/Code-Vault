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
admin      40.00 KiB
config    108.00 KiB
local      40.00 KiB
websiteDB   8.00 KiB
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

## 👀 Read / View Documents (find)

```js
db.student.find()
```

📌 **What it does:** Fetches all documents from `student` collection.

✨ **Prettier output:**

```js
db.student.find().pretty()
```

---

## 🔎 Find with Conditions

```js
db.student.find({ class: 12 })
```

📌 **What it does:** Returns only documents matching the condition.

---

## 🔃 Sort Results

```js
db.student.find().sort({ class: 1 })
```

📌 **What it does:** Sorts results in **ascending order** (`1`).

```js
db.student.find().sort({ class: -1 })
```

📌 **Descending order** (`-1`).

---

## 🎯 Limit Results

```js
db.student.find().limit(2)
```

📌 **What it does:** Returns only the first `n` documents.

---

## ✏️ Update Documents

### Update ONE

```js
db.student.updateOne(
  { name: "Ashwin" },
  { $set: { section: "A" } }
)
```

### Update MANY

```js
db.student.updateMany(
  { class: 12 },
  { $set: { promoted: true } }
)
```

---

## 🧩 Update Operators

### `$set` – Add / Modify field

```js
{ $set: { age: 18 } }
```

### `$unset` – Remove field

```js
{ $unset: { age: "" } }
```

### `$exists` – Check field existence

```js
db.student.find({ age: { $exists: true } })
```

---

## 🧮 Comparison Operators

```js
$eq   // equal
$ne   // not equal
$gt   // greater than
$gte  // greater than or equal
$lt   // less than
$lte  // less than or equal
```

📌 Example:

```js
db.student.find({ class: { $gte: 11 } })
```

---

## 🔗 Logical Operators

### `$and`

```js
db.student.find({
  $and: [{ class: 12 }, { section: "A" }]
})
```

### `$or`

```js
db.student.find({
  $or: [{ class: 10 }, { class: 11 }]
})
```

### `$not`

```js
db.student.find({ class: { $not: { $eq: 12 } } })
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

## 🌳 B‑Tree & Indexes

📌 MongoDB uses **B‑Tree indexes** to make queries fast ⚡

### Create Index

```js
db.student.createIndex({ name: 1 })
```

### View Indexes

```js
db.student.getIndexes()
```

### Drop Index

```js
db.student.dropIndex({ name: 1 })
```

---

## 🔍 Query Explain Plan

```js
db.student.find({ name: "Ashwin" }).explain()
```

📌 **What it does:** Shows how MongoDB executes the query.

### Execution Stats (performance)

```js
db.student.find({ name: "Ashwin" }).explain("executionStats")
```

📊 Shows:

* Documents scanned
* Index used or not
* Query time

---

## 🧠 Pro Tips

* MongoDB is **schema‑less** 🧬
* Database is created **only after first insert**
* `_id` is auto‑generated if not provided
* Collections ≈ Tables, Documents ≈ Rows
* Indexes = 🚀 performance

---

## 🚀 Next Level Topics

* Index optimization 📈
* Aggregation Pipeline 🔗
* Mongoose with Node.js 🧩
* MongoDB Atlas ☁️

---

Happy hacking, Ashwin 😄🍃
