# 하늘소 홈페이지

경북대학교 소프트웨어 개발 동아리 하늘소(Since 1989)의 홈페이지입니다.

- 주소: <https://hanulso.github.io>
- 테마: [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (Jekyll)
- 배포: `main` 브랜치에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 올립니다 (`.github/workflows/pages-deploy.yml`)

## 구성

| 경로 | 내용 |
|---|---|
| `_tabs/intro.md` | 하늘소 소개 |
| `_tabs/history.md` | 연혁 |
| `_tabs/works.md` | 작품 |
| `_tabs/people.md` | 하늘소 사람들 (명단은 `_data/people.yml`) |
| `_tabs/community.md` | 커뮤니티 링크, 제보 방법, 운영진 |
| `_posts/` | 소식과 기록 글 |
| `assets/img/` | 이미지 |
| `_config.yml` | 사이트 설정 |
| `_data/contact.yml` | 사이드바 아래 링크 (GitHub, 페이스북, 네이버 카페, RSS) |

## 글 쓰기

`_posts/YYYY-MM-DD-영문-슬러그.md` 파일을 만듭니다.

```markdown
---
title: 2026년 홈커밍 모임 안내
date: 2026-10-01 20:00:00 +0900
categories: [소식]
tags: [모임]
---

본문을 Markdown으로 씁니다.
```

- `categories`는 지금 `소식`, `기록` 두 가지를 씁니다. 필요하면 늘립니다.
- `date`가 미래면 그 시각이 지나도 빌드에서 빠집니다. 예약 발행이 필요하면 워크플로에 `schedule`을 추가합니다.
- 이미지는 `assets/img/posts/`에 넣고 `![설명](/assets/img/posts/파일.jpg)`로 씁니다.
- GitHub 웹에서 파일을 바로 만들거나 고쳐도 됩니다. 사이트의 각 글 아래 「이 글 편집」 링크가 편집 화면으로 이어집니다.

## 명단에 사람 더하기

`_data/people.yml`은 기수별로 묶여 있습니다. 해당 기수의 `members` 아래에 한 사람씩 적습니다. `name`만 있으면 되고 나머지는 선택입니다.

```yaml
- gen: "21"
  hakbun: "06"          # 그 기수의 대표 학번. 제목 옆에 나온다
  members:
    - name: "홍길동"
      hakbun: "06"
      link: "https://github.com/gildong"   # 지금 쓰는 주소. 있으면 이 주소로 연결한다
```

- `homepage`는 옛 명단에 있던 주소를 보관하는 칸이라, 사이트에서는 Wayback 사본으로 연결합니다.
- 연락처, 메일, 거주지, 직업은 넣지 않습니다. 명단의 원본인 동아리 주소록은 비공개로 관리합니다.
- 주소록에서 탈퇴로 표시된 분은 명단에 넣지 않습니다.

## 기록을 올릴 때 지킬 것

- **개인정보** — 새로 올리는 연락처와 사진은 본인이 공개에 동의한 것만 올립니다. 옛 홈페이지 명단에서 옮긴 정보는 본인이 고치거나 빼 달라고 하면 바로 반영합니다.
- **출처** — 옛 자료를 옮길 때는 원본 위치(Wayback 링크 등)를 함께 적습니다.
- **개인이 쓴 옛 게시글** — 통째로 옮기지 않고 링크를 겁니다.

## 로컬에서 보기

Ruby 3.x가 필요합니다.

```bash
bundle install
bundle exec jekyll serve
# http://127.0.0.1:4000
```

## 운영진 추가하기

조직 owner가 다음 순서로 추가합니다.

1. <https://github.com/orgs/hanulso/people> 에서 **Invite member**로 GitHub 계정을 초대합니다.
2. <https://github.com/orgs/hanulso/teams> 에 `maintainers` 팀을 만들고(처음 한 번), 새 운영진을 넣습니다.
3. 이 저장소의 **Settings → Collaborators and teams**에서 `maintainers` 팀에 **Write** 권한을 줍니다.

Write 권한이 있으면 `main`에 바로 push할 수 있고, push하면 사이트에 반영됩니다. 운영진이 아닌 분은 이슈나 Pull Request로 보내 주시면 운영진이 검토해서 합칩니다.

## 처음 한 번만 하는 설정

- 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 둡니다.
