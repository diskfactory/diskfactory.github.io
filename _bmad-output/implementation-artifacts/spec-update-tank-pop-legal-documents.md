---
title: 'Update Tank Pop Legal Documents for Permanent No-Ads Purchase'
type: 'feature'
created: '2026-07-23'
status: 'done'
baseline_commit: '10c8b54c0340ce8f7366fc1218cd968a48b44bb2'
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The Tank Pop privacy policy still describes a free-only service and anonymous external transfers, while the live product now sells permanent no-ads rights through two mutually exclusive distribution builds. The Google Play build uses Google Play Billing, Google Play Games identity, and RevenueCat, while the Apps in Toss build uses Apps in Toss login/IAP and DiskFactory's Cloudflare Worker/D1; neither build runs the other build's purchase stack. The terms mention possible future paid content but do not define the actual no-ads product, restoration, or refund effects.

**Approach:** Update only the Tank Pop entries in the existing legal-content data files. Preserve the current site shell and content model, provide equivalent Korean, English, and Brazilian Portuguese text, and separate disclosures by distribution version so no wording suggests that RevenueCat and Apps in Toss process the same purchase or operate in the same build.

## Boundaries & Constraints

**Always:** Preserve all pre-existing uncommitted edits, including the `contact@diskfactory.app` migration. Describe the no-ads product as a non-consumable, one-time lifetime purchase rather than a subscription. Cover banner, interstitial, and rewarded-ad video removal; account binding and restoration; refund-driven entitlement revocation; purchase identifiers and entitlement-state processing; and statutory transaction retention. Explicitly label Google Play/RevenueCat/Google Play Games processing as applying only to the Google Play build. Explicitly label Apps in Toss login/IAP and DiskFactory Cloudflare Worker/D1 processing as applying only to the Apps in Toss build. Keep all three supported locales semantically aligned.

**Ask First:** Adding unverified overseas-transfer countries or legal entity details, changing site rendering/types, modifying other products' policies, or changing the purchase implementation.

**Never:** Claim that RevenueCat operates in the Apps in Toss build, claim that Apps in Toss or its dedicated purchase Worker operates in the Google Play build, imply that both purchase stacks receive the same transaction, claim that detailed payment credentials are collected by DiskFactory, promise service beyond the service lifetime, remove unrelated existing privacy disclosures, overwrite the user's dirty-worktree changes, or add legal details that are not supported by code, platform documentation, or current law.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Tank Pop legal page | User opens the Tank Pop privacy or terms route | Updated paid-product, data-processing, restoration, and refund text renders in the selected locale | TypeScript/build catches malformed content |
| Google Play disclosure | Reader checks the Google Play version | Only Google Play Billing, Google Play Games identity, and RevenueCat are identified as the no-ads purchase stack | Wording must not attribute the purchase to Apps in Toss or the AIT Worker |
| Apps in Toss disclosure | Reader checks the Apps in Toss version | Only Apps in Toss login/IAP and DiskFactory's Cloudflare Worker/D1 are identified as the no-ads purchase stack | Wording must not attribute the purchase to RevenueCat |
| Other legal pages | User opens another project's policy | Existing content remains unchanged | Review scoped diff |
| App deletion or refund | User reads retention/refund provisions | Text distinguishes device deletion from retained transaction records and states refunded rights can be revoked | Avoid blanket deletion or no-refund claims |

</frozen-after-approval>

## Code Map

- `data/privacyPolicies.ts` -- Tank Pop privacy-policy content, external-service disclosures, retention, rights, and effective date.
- `data/termsOfService.ts` -- Tank Pop terms covering paid content, no-ads rights, account binding, restoration, withdrawal, and refunds.
- `types/privacy.ts` -- Existing table-capable privacy content model; no change expected.
- `types/terms.ts` -- Existing localized terms content model; no change expected.

## Tasks & Acceptance

**Execution:**
- [x] `data/privacyPolicies.ts` -- revise the Tank Pop introduction and affected collection, sharing, deletion, retention, changes, and contact content; add concise localized purchase-processing disclosures split into Google Play and Apps in Toss versions.
- [x] `data/termsOfService.ts` -- replace the generic future-paid-content wording with localized permanent no-ads product, account restoration, withdrawal, refund, and version-specific payment-platform terms.
- [x] Review the scoped diff to confirm other products and existing email edits are preserved.

**Acceptance Criteria:**
- Given a visitor opens Tank Pop privacy content, when any supported locale is selected, then the page discloses paid purchase processing, relevant external services, concrete retention categories, and deletion-request behavior without claiming payment-card collection or combining the mutually exclusive purchase stacks.
- Given a visitor reads the Google Play disclosure, when purchase processing is described, then only Google Play Billing, Google Play Games identity, and RevenueCat are identified as that build's no-ads purchase path.
- Given a visitor reads the Apps in Toss disclosure, when purchase processing is described, then only Apps in Toss login/IAP and DiskFactory's Cloudflare Worker/D1 are identified as that build's no-ads purchase path.
- Given a visitor opens Tank Pop terms, when any supported locale is selected, then the page describes a one-time non-subscription no-ads right, its ad-removal scope, account binding/restoration, refund-driven revocation, and the applicable platform-specific purchase route.
- Given another project policy or the user's prior contact-email edits, when the change is reviewed, then those contents remain intact.

## Spec Change Log

## Design Notes

Use the existing localized paragraph/bullet structure. A privacy table may be used where it makes the mapping of purpose, data, retention, and applicable distribution version materially clearer, but do not redesign the page or introduce a new content type. Use explicit labels such as “Google Play version” and “Apps in Toss version”; do not rely on a generic “depending on platform” sentence followed by a combined vendor list. “Lifetime” means no recurring charge and continued benefit for the supported account while the service is provided; it must not imply perpetual operation of the service.

## Verification

**Commands:**
- `npm run lint` -- expected: no new lint errors.
- `npm run build` -- expected: successful Next.js production build and generated Tank Pop legal routes.
- `git diff --check -- data/privacyPolicies.ts data/termsOfService.ts` -- expected: no whitespace errors.
- `powershell -NoProfile -ExecutionPolicy Bypass -File D:\unityprojects\TankTank\tools\verify-session-rules.ps1` -- expected: repository session rules pass after related asset-script work.

## Suggested Review Order

**Platform-specific processing**

- Start with mutually exclusive collection and entitlement paths for both distribution builds.
  [`privacyPolicies.ts:485`](../../data/privacyPolicies.ts#L485)

- Confirm each build uses only its own payment, identity, and restoration stack.
  [`termsOfService.ts:204`](../../data/termsOfService.ts#L204)

- Verify no automatic entitlement transfer occurs between Google Play and Apps in Toss.
  [`termsOfService.ts:214`](../../data/termsOfService.ts#L214)

**Product and consumer terms**

- Review the one-time, non-subscription product definition and exact ad-removal scope.
  [`termsOfService.ts:189`](../../data/termsOfService.ts#L189)

- Check withdrawal windows, platform refunds, and entitlement revocation after cancellation.
  [`termsOfService.ts:219`](../../data/termsOfService.ts#L219)

**Privacy lifecycle**

- Review deletion effects on entitlement continuity and future purchase restoration.
  [`privacyPolicies.ts:643`](../../data/privacyPolicies.ts#L643)

- Confirm statutory transaction-retention categories and concrete retention periods.
  [`privacyPolicies.ts:651`](../../data/privacyPolicies.ts#L651)
