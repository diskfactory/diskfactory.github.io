---
title: 'Tank Pop 법률 문서의 기술 구현 상세 최소화'
type: 'refactor'
created: '2026-07-23'
status: 'done'
route: 'one-shot'
---

# Tank Pop 법률 문서의 기술 구현 상세 최소화

## Intent

**Problem:** Tank Pop 광고제거권 관련 약관과 개인정보처리방침에 구매 검증 구조, 내부 인프라 및 식별 방식이 이용자 고지에 필요한 수준보다 자세하게 노출되어 있었다.

**Approach:** 이용약관에는 상품 조건, 적용 범위, 플랫폼 간 이전 제한, 복구 및 환불 결과만 남기고, 개인정보처리방침에는 실제 처리 정보와 외부 서비스의 역할을 정책 수준의 일반 범주로만 기술한다.

## Suggested Review Order

**이용자 계약 조건**

- 일회성 상품과 서비스 제공기간을 구현 방식 없이 정의한다.
  [`termsOfService.ts:189`](../../data/termsOfService.ts#L189)

- 플랫폼 간 이전과 복구 조건만 간결하게 고지한다.
  [`termsOfService.ts:199`](../../data/termsOfService.ts#L199)

**개인정보 고지**

- 구매 처리정보를 식별·인증·거래정보 범주로만 설명한다.
  [`privacyPolicies.ts:485`](../../data/privacyPolicies.ts#L485)

- 외부 서비스 역할을 결제와 구매 관리 수준으로 제한한다.
  [`privacyPolicies.ts:552`](../../data/privacyPolicies.ts#L552)
