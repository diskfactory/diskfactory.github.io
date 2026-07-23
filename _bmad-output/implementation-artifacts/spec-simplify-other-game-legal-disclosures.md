---
title: '다른 게임 개인정보처리방침의 과도한 기술 설명 정리'
type: 'refactor'
created: '2026-07-23'
status: 'done'
route: 'one-shot'
---

# 다른 게임 개인정보처리방침의 과도한 기술 설명 정리

## Intent

**Problem:** SwipeRunner 개인정보처리방침이 내부 분석·오류진단 방식과 세부 이벤트 구조를 반복해서 설명하고, 바닥부수기 방침에는 확인되지 않은 AI 설명과 잘못된 프로젝트 연결정보가 있었다.

**Approach:** 실제 처리 항목·목적·외부 서비스 역할은 유지하되 내부 연결·중복집계·스택 트레이스 설명을 일반적인 개인정보 범주로 정리하고, 바닥부수기 프로젝트와 방침의 연결정보를 일치시킨다.

## Suggested Review Order

**SwipeRunner 개인정보 최소 고지**

- 처리 목적과 정보 범주를 구현 세부사항 없이 확인한다.
  [`privacyPolicies.ts:183`](../../data/privacyPolicies.ts#L183)

- 대표 게임 이용기록과 앱·기기정보 범위를 검토한다.
  [`privacyPolicies.ts:215`](../../data/privacyPolicies.ts#L215)

- 외부 서비스별 역할을 한 문단으로 확인한다.
  [`privacyPolicies.ts:250`](../../data/privacyPolicies.ts#L250)

- 삭제 요청과 보유기간의 대상 범위를 확인한다.
  [`privacyPolicies.ts:317`](../../data/privacyPolicies.ts#L317)

**바닥부수기 연결 정합성**

- 방침이 실제 프로젝트 ID를 참조하는지 확인한다.
  [`privacyPolicies.ts:23`](../../data/privacyPolicies.ts#L23)

- 프로젝트 링크가 실제 방침 slug를 가리키는지 확인한다.
  [`projects.ts:29`](../../data/projects.ts#L29)
