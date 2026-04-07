# 環境構築テンプレート

## 概要

React + Vite+（web）と Hono（api）のモノレポ構成テンプレートです。
clone 後に `docker compose up` を実行するだけで開発環境が立ち上がります。

## 構成

- モノレポ構成
- パッケージマネージャー: Yarn

| サービス | 技術スタック | ポート |
|---|---|---|
| web (`apps/web`) | React + TypeScript + Vite+ | 5173 |
| api (`apps/api`) | Hono + TypeScript | 8787 |

## 使い方

### 1. リポジトリをクローン

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. 起動

```bash
docker compose up
```

`yarn install` はコンテナ起動時に自動で実行されます。web は Vite+ の dev サーバー（`vp dev`）で起動します。

- web: http://localhost:5173
- api: http://localhost:8787

## ディレクトリ構成

```
.
├── docker-compose.yml
├── docker/
│   ├── web/
│   │   └── Dockerfile
│   └── api/
│       └── Dockerfile
└── apps/
    ├── web/    # React + TypeScript + Vite+
    └── api/    # Hono + TypeScript
```

## 補足

### Vite+ について

web のビルド・リント・フォーマットには [Vite+](https://viteplus.dev/) を使用しています。
`docker compose exec web vp check` などでコンテナ内から実行できます。

```bash
docker compose exec web vp check   # リント + 型チェック
docker compose exec web vp fmt     # フォーマット
docker compose exec web vp build   # 本番ビルド
```

### api のリンター・フォーマッターについて

Vite+ は Vite ベースのプロジェクト向けのため、Hono（api）には恩恵が及びません。
api には [Biome](https://biomejs.dev/) などのツールを別途導入することを推奨します。
