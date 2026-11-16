import {
  BarChart,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  LineChart,
  PieChart,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

const SOURCE =
  "Source: Snowflake · FIVETRAN_DATABASE.MARKETING · Sep 1–30, 2026";

const kpis = {
  spend: 200851.65,
  impressions: 3762046,
  clicks: 117555,
  sessions: 200,
  avgSessionSeconds: 296.5,
  bounceRatePct: 11.0,
  attributedConversions: 30,
  revenue: 1643.0,
  emailEvents: 69,
  platformConversions: 3926,
  conversionValue: 276880.0,
  ctrPct: 3.12,
  cpc: 1.71,
  roas: 1.38,
};

const daily = [
  { date: "Sep 1", spend: 6082.35, clicks: 3921, conversions: 134 },
  { date: "Sep 2", spend: 6030.85, clicks: 3440, conversions: 117 },
  { date: "Sep 3", spend: 6341.17, clicks: 3931, conversions: 133 },
  { date: "Sep 4", spend: 7119.04, clicks: 3812, conversions: 129 },
  { date: "Sep 5", spend: 7662.35, clicks: 4058, conversions: 138 },
  { date: "Sep 6", spend: 5452.58, clicks: 3262, conversions: 110 },
  { date: "Sep 7", spend: 6079.21, clicks: 3278, conversions: 110 },
  { date: "Sep 8", spend: 5307.89, clicks: 3290, conversions: 114 },
  { date: "Sep 9", spend: 5766.46, clicks: 3413, conversions: 111 },
  { date: "Sep 10", spend: 9102.03, clicks: 4867, conversions: 162 },
  { date: "Sep 11", spend: 7823.86, clicks: 4388, conversions: 145 },
  { date: "Sep 12", spend: 7335.41, clicks: 4363, conversions: 143 },
  { date: "Sep 13", spend: 7020.28, clicks: 4070, conversions: 130 },
  { date: "Sep 14", spend: 7101.99, clicks: 4152, conversions: 132 },
  { date: "Sep 15", spend: 8191.37, clicks: 4260, conversions: 141 },
  { date: "Sep 16", spend: 7386.91, clicks: 4317, conversions: 146 },
  { date: "Sep 17", spend: 6715.57, clicks: 4143, conversions: 140 },
  { date: "Sep 18", spend: 6981.09, clicks: 3724, conversions: 125 },
  { date: "Sep 19", spend: 6274.47, clicks: 3866, conversions: 128 },
  { date: "Sep 20", spend: 7337.94, clicks: 4287, conversions: 146 },
  { date: "Sep 21", spend: 6521.68, clicks: 3802, conversions: 130 },
  { date: "Sep 22", spend: 5492.47, clicks: 3742, conversions: 127 },
  { date: "Sep 23", spend: 4967.99, clicks: 3088, conversions: 106 },
  { date: "Sep 24", spend: 4206.25, clicks: 2991, conversions: 103 },
  { date: "Sep 25", spend: 5305.12, clicks: 3419, conversions: 111 },
  { date: "Sep 26", spend: 7821.62, clicks: 4639, conversions: 158 },
  { date: "Sep 27", spend: 7319.01, clicks: 4579, conversions: 149 },
  { date: "Sep 28", spend: 7488.78, clicks: 4265, conversions: 142 },
  { date: "Sep 29", spend: 7823.98, clicks: 4370, conversions: 142 },
  { date: "Sep 30", spend: 6791.93, clicks: 3818, conversions: 124 },
];

const campaigns = [
  {
    name: "Prospecting - Lookalike",
    objective: "Leads",
    status: "Active",
    spend: 58592.33,
    impressions: 1076644,
    clicks: 33263,
    conversions: 1110,
    conversionValue: 77998,
    ctr: 3.09,
    cpc: 1.76,
    roas: 1.33,
  },
  {
    name: "B2B Lead Gen - Whitepaper",
    objective: "Leads",
    status: "Active",
    spend: 52653.81,
    impressions: 1072036,
    clicks: 33474,
    conversions: 1114,
    conversionValue: 78575,
    ctr: 3.12,
    cpc: 1.57,
    roas: 1.49,
  },
  {
    name: "Non-Brand Search - Fall Promo",
    objective: "Sales",
    status: "Active",
    spend: 31674.45,
    impressions: 533138,
    clicks: 16681,
    conversions: 561,
    conversionValue: 39719,
    ctr: 3.13,
    cpc: 1.9,
    roas: 1.25,
  },
  {
    name: "Brand Search - Always On",
    objective: "Traffic",
    status: "Active",
    spend: 29990.05,
    impressions: 536722,
    clicks: 16700,
    conversions: 556,
    conversionValue: 39101,
    ctr: 3.11,
    cpc: 1.8,
    roas: 1.3,
  },
  {
    name: "Retargeting - Cart Abandoners",
    objective: "Sales",
    status: "Active",
    spend: 27941.01,
    impressions: 543506,
    clicks: 17437,
    conversions: 585,
    conversionValue: 41487,
    ctr: 3.21,
    cpc: 1.6,
    roas: 1.48,
  },
];

const platformSpend = [
  { label: "Meta Ads", value: 86533.34 },
  { label: "Google Ads", value: 61664.5 },
  { label: "LinkedIn Ads", value: 52653.81 },
];

const devicePlatform = [
  { device: "Tablet", platform: "Meta Ads", spend: 30704.3 },
  { device: "Desktop", platform: "Meta Ads", spend: 30043.56 },
  { device: "Mobile", platform: "Meta Ads", spend: 25785.48 },
  { device: "Mobile", platform: "Google Ads", spend: 20665.56 },
  { device: "Desktop", platform: "Google Ads", spend: 20565.24 },
  { device: "Tablet", platform: "Google Ads", spend: 20433.7 },
  { device: "Mobile", platform: "LinkedIn Ads", spend: 19252.36 },
  { device: "Desktop", platform: "LinkedIn Ads", spend: 18559.57 },
  { device: "Tablet", platform: "LinkedIn Ads", spend: 14841.88 },
];

const emailEvents = [
  { kind: "SENT", cnt: 24 },
  { kind: "DELIVERED", cnt: 23 },
  { kind: "OPEN", cnt: 15 },
  { kind: "CLICK", cnt: 6 },
  { kind: "UNSUBSCRIBE", cnt: 1 },
];

const conversionTypes = [
  { kind: "Lead", cnt: 13 },
  { kind: "Purchase", cnt: 9 },
  { kind: "Signup", cnt: 8 },
];

const sessionSources = [
  { source: "facebook", country: "DE", sessions: 15, avgPageViews: 5.2 },
  { source: "facebook", country: "GB", sessions: 15, avgPageViews: 5.2 },
  { source: "google", country: "CA", sessions: 15, avgPageViews: 5.6 },
  { source: "facebook", country: "US", sessions: 14, avgPageViews: 4.7 },
  { source: "mailchimp", country: "CA", sessions: 14, avgPageViews: 5.3 },
  { source: "mailchimp", country: "DE", sessions: 14, avgPageViews: 4.5 },
  { source: "google", country: "US", sessions: 14, avgPageViews: 4.6 },
  { source: "facebook", country: "CA", sessions: 14, avgPageViews: 4.1 },
  { source: "mailchimp", country: "GB", sessions: 14, avgPageViews: 4.6 },
  { source: "mailchimp", country: "US", sessions: 14, avgPageViews: 5.9 },
];

const schemaTables = [
  { name: "FACT_AD_PERFORMANCE_DAILY", rows: 630, role: "Fact" },
  { name: "FACT_WEB_SESSIONS", rows: 200, role: "Fact" },
  { name: "FACT_EMAIL_EVENTS", rows: 69, role: "Fact" },
  { name: "FACT_CONVERSIONS", rows: 30, role: "Fact" },
  { name: "DIM_DATE", rows: 30, role: "Dimension" },
  { name: "DIM_CONTACT", rows: 12, role: "Dimension" },
  { name: "DIM_AD", rows: 7, role: "Dimension" },
  { name: "DIM_CAMPAIGN", rows: 7, role: "Dimension" },
  { name: "DIM_AD_GROUP", rows: 5, role: "Dimension" },
  { name: "DIM_ACCOUNT", rows: 4, role: "Dimension" },
  { name: "DIM_PLATFORM", rows: 4, role: "Dimension" },
  { name: "RAW_API_PAYLOADS", rows: 2, role: "Raw" },
];

function money(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function moneyExact(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function num(n: number): string {
  return n.toLocaleString("en-US");
}

export default function SnowflakeMarketingOverview() {
  const theme = useHostTheme();

  return (
    <Stack gap={24} style={{ padding: 24, maxWidth: 1100 }}>
      <Stack gap={8}>
        <Row gap={8} align="center" wrap>
          <H1 style={{ margin: 0 }}>Marketing performance</H1>
          <Pill tone="info" active>
            Snowflake
          </Pill>
          <Pill tone="success" active>
            All campaigns active
          </Pill>
        </Row>
        <Text tone="secondary" size="small">
          {SOURCE}
        </Text>
        <Text>
          Paid media, web sessions, email, and attributed conversions from the
          Fivetran marketing star schema.
        </Text>
      </Stack>

      <Callout tone="info" title="Schema focus">
        Primary grain is FACT_AD_PERFORMANCE_DAILY (630 rows) joined to
        DIM_CAMPAIGN, DIM_DATE, DIM_ACCOUNT, and DIM_PLATFORM. Supporting facts
        cover web sessions, email events, and attributed conversions.
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat label="Ad spend" value={money(kpis.spend)} tone="info" />
        <Stat label="Impressions" value={num(kpis.impressions)} />
        <Stat label="Clicks" value={num(kpis.clicks)} />
        <Stat
          label="Blended ROAS"
          value={`${kpis.roas.toFixed(2)}x`}
          tone="success"
        />
      </Grid>

      <Grid columns={4} gap={12}>
        <Stat label="CTR" value={`${kpis.ctrPct}%`} />
        <Stat label="Avg CPC" value={moneyExact(kpis.cpc)} />
        <Stat
          label="Platform conversions"
          value={num(kpis.platformConversions)}
          tone="success"
        />
        <Stat
          label="Conversion value"
          value={money(kpis.conversionValue)}
          tone="success"
        />
      </Grid>

      <Divider />

      <Stack gap={8}>
        <H2 style={{ margin: 0 }}>Daily ad spend</H2>
        <Text tone="secondary" size="small">
          Axis: Date (Sep 2026) · Spend ($) · {SOURCE}
        </Text>
        <LineChart
          height={260}
          fill
          valuePrefix="$"
          categories={daily.map((d) => d.date)}
          series={[
            {
              name: "Spend ($)",
              data: daily.map((d) => d.spend),
              tone: "info",
            },
          ]}
        />
        <H3 style={{ margin: 0 }}>Daily clicks and platform conversions</H3>
        <Text tone="secondary" size="small">
          Axis: Date · Clicks and platform conversions (count) · {SOURCE}
        </Text>
        <LineChart
          height={220}
          categories={daily.map((d) => d.date)}
          series={[
            {
              name: "Clicks",
              data: daily.map((d) => d.clicks),
              tone: "success",
            },
            {
              name: "Platform conversions",
              data: daily.map((d) => d.conversions),
              tone: "warning",
            },
          ]}
        />
      </Stack>

      <Divider />

      <Stack gap={8}>
        <H2 style={{ margin: 0 }}>Campaign performance</H2>
        <Text tone="secondary" size="small">
          Spend, CTR, CPC, ROAS from FACT_AD_PERFORMANCE_DAILY × DIM_CAMPAIGN ·{" "}
          {SOURCE}
        </Text>
        <BarChart
          height={240}
          horizontal
          valuePrefix="$"
          categories={campaigns.map((c) => c.name)}
          series={[
            {
              name: "Spend ($)",
              data: campaigns.map((c) => c.spend),
              tone: "info",
            },
          ]}
        />
        <Table
          stickyHeader
          headers={[
            "Campaign",
            "Objective",
            "Spend",
            "Impressions",
            "Clicks",
            "CTR",
            "CPC",
            "Conv.",
            "ROAS",
          ]}
          columnAlign={[
            "left",
            "left",
            "right",
            "right",
            "right",
            "right",
            "right",
            "right",
            "right",
          ]}
          rows={campaigns.map((c) => [
            c.name,
            c.objective,
            moneyExact(c.spend),
            num(c.impressions),
            num(c.clicks),
            `${c.ctr}%`,
            moneyExact(c.cpc),
            num(c.conversions),
            `${c.roas.toFixed(2)}x`,
          ])}
        />
      </Stack>

      <Divider />

      <Grid columns={2} gap={20}>
        <Stack gap={8}>
          <H2 style={{ margin: 0 }}>Spend by platform</H2>
          <Text tone="secondary" size="small">
            Share of ad spend ($) by DIM_PLATFORM · {SOURCE}
          </Text>
          <PieChart data={platformSpend} donut size={220} />
          <Table
            headers={["Platform", "Spend", "Share"]}
            columnAlign={["left", "right", "right"]}
            rows={platformSpend.map((p) => [
              p.label,
              moneyExact(p.value),
              `${((p.value / kpis.spend) * 100).toFixed(1)}%`,
            ])}
          />
        </Stack>

        <Stack gap={8}>
          <H2 style={{ margin: 0 }}>Device × platform spend</H2>
          <Text tone="secondary" size="small">
            Spend ($) by device and platform · {SOURCE}
          </Text>
          <BarChart
            height={280}
            horizontal
            valuePrefix="$"
            categories={devicePlatform.map(
              (d) => `${d.platform} · ${d.device}`,
            )}
            series={[
              {
                name: "Spend ($)",
                data: devicePlatform.map((d) => d.spend),
              },
            ]}
          />
        </Stack>
      </Grid>

      <Divider />

      <H2 style={{ margin: 0 }}>Downstream funnel</H2>
      <Grid columns={4} gap={12}>
        <Stat label="Web sessions" value={num(kpis.sessions)} />
        <Stat
          label="Avg session length"
          value={`${kpis.avgSessionSeconds}s`}
        />
        <Stat
          label="Bounce rate"
          value={`${kpis.bounceRatePct}%`}
          tone="success"
        />
        <Stat
          label="Attributed revenue"
          value={moneyExact(kpis.revenue)}
          tone="success"
        />
      </Grid>

      <Grid columns={2} gap={20}>
        <Card>
          <CardHeader
            trailing={
              <Text size="small" tone="secondary">
                {kpis.emailEvents} events
              </Text>
            }
          >
            Email events by type
          </CardHeader>
          <CardBody>
            <Stack gap={12}>
              <Text tone="secondary" size="small">
                Count of FACT_EMAIL_EVENTS.EVENT_TYPE · {SOURCE}
              </Text>
              <BarChart
                height={200}
                categories={emailEvents.map((e) => e.kind)}
                series={[
                  {
                    name: "Events",
                    data: emailEvents.map((e) => e.cnt),
                    tone: "info",
                  },
                ]}
                showValues
              />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            trailing={
              <Text size="small" tone="secondary">
                {kpis.attributedConversions} conversions
              </Text>
            }
          >
            Attributed conversions
          </CardHeader>
          <CardBody>
            <Stack gap={12}>
              <Text tone="secondary" size="small">
                Count of FACT_CONVERSIONS.CONVERSION_TYPE · {SOURCE}
              </Text>
              <BarChart
                height={200}
                categories={conversionTypes.map((c) => c.kind)}
                series={[
                  {
                    name: "Conversions",
                    data: conversionTypes.map((c) => c.cnt),
                    tone: "success",
                  },
                ]}
                showValues
              />
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Stack gap={8}>
        <H3 style={{ margin: 0 }}>Top web session slices</H3>
        <Text tone="secondary" size="small">
          Sessions by UTM source and country from FACT_WEB_SESSIONS · {SOURCE}
        </Text>
        <Table
          stickyHeader
          headers={["UTM source", "Country", "Sessions", "Avg page views"]}
          columnAlign={["left", "left", "right", "right"]}
          rows={sessionSources.map((s) => [
            s.source,
            s.country,
            String(s.sessions),
            s.avgPageViews.toFixed(1),
          ])}
        />
      </Stack>

      <Divider />

      <Stack gap={8}>
        <H2 style={{ margin: 0 }}>MARKETING schema inventory</H2>
        <Text tone="secondary" size="small">
          Table row counts from INFORMATION_SCHEMA.TABLES · Source: Snowflake ·
          FIVETRAN_DATABASE.MARKETING
        </Text>
        <Table
          stickyHeader
          headers={["Table", "Role", "Rows"]}
          columnAlign={["left", "left", "right"]}
          rows={schemaTables.map((t) => [t.name, t.role, num(t.rows)])}
        />
      </Stack>

      <Text size="small" tone="secondary" style={{ color: theme.text.secondary }}>
        Snapshot embedded from live Snowflake SQL via MCP. Canvas data is not
        live-refreshing.
      </Text>
    </Stack>
  );
}
