---
name: project-music-portfolio
description: 음악 포트폴리오 웹사이트 프로젝트 개요 — 스택, 구조, 디자인 결정 사항
metadata:
  type: project
---

React + Vite + TypeScript 기반 음악 포트폴리오 웹사이트.

**Why:** 음악 작업물과 크레딧을 전시하는 개인 포트폴리오 목적.

**How to apply:** 추가 기능 구현 시 아래 구조와 데이터 흐름을 참고. 데이터 수정은 src/data/*.ts 파일만 건드리면 됨.

## 기술 스택
- React 18 + Vite + TypeScript
- Tailwind CSS v4 (@tailwindcss/vite 플러그인)

## 디자인
- 라이트 모던: 흰 배경(#fafafa), 회색 계열 텍스트, 최소 컬러
- sticky 헤더, 반응형 grid (1→2→3컬럼)

## 섹션
- Hero: 이름 + 한줄 소개 (텍스트만)
- Works (Tracks): YouTube/SoundCloud 임베드 + 태그
- Credits (Projects): 리스트 형태 크레딧 테이블

## 파일 구조
```
src/
  components/
    Header.tsx       — sticky nav
    Hero.tsx         — 이름/소개
    EmbedPlayer.tsx  — YouTube/SoundCloud iframe
    TrackCard.tsx    — 트랙 카드 (embed + 메타)
    TracksSection.tsx
    ProjectRow.tsx   — 크레딧 한 행
    ProjectsSection.tsx
    Footer.tsx
  data/
    tracks.ts        — Track[] 샘플 데이터 (교체 필요)
    projects.ts      — Project[] 샘플 데이터 (교체 필요)
  types/index.ts     — Track, Project, EmbedType 인터페이스
```

## 커스터마이즈 포인트
- `src/data/tracks.ts`: 트랙 추가/수정 (embedId = YouTube videoId 또는 SoundCloud URL)
- `src/data/projects.ts`: 크레딧 추가/수정
- `src/components/Header.tsx`: 이름 교체
- `src/components/Hero.tsx`: 직함 + 이름 + 소개 문구 교체
- `src/components/Footer.tsx`: SNS 링크 교체
