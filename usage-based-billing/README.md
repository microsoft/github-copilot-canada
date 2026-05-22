# 💳 Usage-Based Billing (UBB) Recommendations

> A practical playbook for Canadian customers preparing for GitHub Copilot's
> move to usage-based billing on **June 1**. Maintained by the
> **GitHub Copilot Canada team at Microsoft**.

For the broader list of UBB reference links (announcement blog, official
documentation, pricing reference, code review changelog, billing preview
sidecar video), see the
[root README's UBB section](../README.md#-usage-based-billing-ubb).

---

## What's Actually Changing (Starting June 1)

### Seat prices stay the same
- Copilot Business: $19 / user / month
- Copilot Enterprise: $39 / user / month

### Seats now include a pool of usage credits
Each seat contributes to a shared enterprise pool of AI credits (1 credit = $0.01).
Different Copilot features consume credits from that pool.

### Core coding assistance stays unlimited
Code completion and Next Edit Suggestions do not use credits and remain unlimited.

### A 3-month buffer covers June through August
Extra credits are included temporarily so customers can observe usage.
- Business: 3,000 credits per seat ($30)
- Enterprise: 7,000 credits per seat ($70)

### After August
Standard included pool per seat becomes:
- Business: 1,900 credits ($19)
- Enterprise: 3,900 credits ($39)

### Nothing breaks if limits are reached
If credits and budgets are exhausted:
- Code completion keeps working.
- Other features pause until budgets are increased or the next billing cycle begins.

### You'll get usage visibility first
Before the change is finalized, you'll see actual historical usage translated
into the new model so you can estimate costs.

---

## The Practical 5-Step Plan

### 1. Check your preview usage (early May)
Look at the preview report showing how recent usage would translate under the
new billing model. Use this to understand your baseline usage patterns before
June 1.

### 2. Set a simple spending ceiling (May to early June)
Define an organization or cost-center budget for usage beyond the included
credits. Start conservatively if your procurement process is slow. You can
always raise it later.

### 3. Add a default per-user limit (June)
Set a standard user-level budget so a single developer can't accidentally
consume a large share of the shared pool. Increase limits only for known
heavy users.

### 4. Review the data monthly (June onward)
Use the provided reports (with user, model, and request breakdowns) to:
- see where credits are going
- tune budgets
- spot optimization opportunities

Wait until you have about 60 days of data before making major budget or
commitment decisions.

### 5. Turn on Auto Mode (starting June)
Auto Mode automatically routes tasks to cheaper or more powerful models as
needed. This lowers cost without requiring developers to think about model
selection.

---

## What Not to Overreact To

- **Don't cut seats just to control spend.** Seats also increase the size of
  your included usage pool.
- **Don't manually manage budgets for every user.** Set a default limit and
  override only for exceptions.
- **Don't make long-term spending decisions based on one early month of data.**

---

## ✅ In Simple Terms

- Pricing per seat isn't changing.
- Seats now come with a shared usage allowance.
- You'll get visibility and 3 months of extra credits to understand usage.
- Set basic org budgets and user limits to manage cost without disruption.

---

## 📦 Resources to Share with Customers

The **customer billing usage report is live as of May 12**. Share these
resources with your customer when preparing them for UBB:

- **April reports are now available (changelog, May 12)** — Announces the
  customer-facing billing usage report. Share with customers preparing for UBB.
  [github.blog/changelog](https://github.blog/changelog/2026-05-12-april-reports-are-now-available-to-prepare-for-usage-based-billing/)
- **Preparing your organization for usage-based billing (docs)** — Step-by-step
  guidance for organization and enterprise admins.
  [docs.github.com](https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing)
- **Community Discussion — GitHub Copilot is moving to usage-based billing** —
  Frequently asked questions thread.
  [github.com/orgs/community/discussions/192948](https://github.com/orgs/community/discussions/192948)
- **Webinar recap (on-demand video)** — Recap of the UBB customer briefing.
  [github.ondemand.goldcast.io](https://github.ondemand.goldcast.io/on-demand/9c23608e-dc81-41f3-82c2-6629c9a26f36)

### Webinars and workshops

- **Upcoming webinars** — Live customer-facing sessions on UBB.
  <!-- TODO: add registration URL -->
- **UBB Budgeting & Optimization workshops** — Register your customer for
  hands-on workshops covering budgets, limits, and Auto Mode.
  <!-- TODO: add registration URL -->

---

## 💬 Get in Touch

Questions, customer scenarios, or workshop nominations? Reach the
GitHub Copilot Canada team at
[GitHubCopilotCanada@microsoft.com](mailto:GitHubCopilotCanada@microsoft.com),
or open an issue using the templates in
[.github/ISSUE_TEMPLATE](../.github/ISSUE_TEMPLATE).
