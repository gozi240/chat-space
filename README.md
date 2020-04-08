# chat-space DB設計について
## 必要な4テーブル

## ①usersテーブル設計
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true
|email|string|null: false, unique: true
## Association
- has_many :groups_users
- has_many :groups, through: groups_users
- has_many :messages

## ②messagesテーブル設計
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true
|group_id|integer|null: false, foreign_key: true
## Association
- belongs_to :group
- belongs_to :user

## ③groupsテーブル設計
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true
## Association
- has_many :groups_users
- has_many :users, through: groups_users
- has_many :messages

## ④groups_usersテーブル設計
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


# 実装してない
グループ編集後のリダイレクト先を変更する 今の仕様では、グループの情報を更新した後に、ルートパスへリダイレクトされるようになっています。
このリダイレクト先を変更して、今いるグループのメッセージ一覧が表示されるようにしましょう。

こちらは解答を掲載しませんので、自力での実装に挑戦してみましょう。不明点があれば、基礎カリキュラムを復習しましょう。
