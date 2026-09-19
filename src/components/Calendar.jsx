import React, { useMemo } from "react";
import schedule from "../data/schedule.json";

const DAY_INDEX = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function ymd(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildMonthCells(now, recurring, exceptions) {
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startPad = first.getDay();
  const exceptionSet = new Set(exceptions || []);

  const byKind = {};
  for (const event of recurring) {
    byKind[event.kind] = DAY_INDEX[event.day];
  }

  const cells = [];
  const total = Math.ceil((startPad + daysInMonth) / 7) * 7;

  for (let i = 0; i < total; i += 1) {
    const dayNum = i - startPad + 1;
    const inMonth = dayNum >= 1 && dayNum <= daysInMonth;
    if (!inMonth) {
      cells.push({ key: `pad-${i}`, dim: true, label: "" });
      continue;
    }
    const date = new Date(year, month, dayNum);
    const key = ymd(date);
    const dow = date.getDay();
    const skipped = exceptionSet.has(key);
    const isToday = key === ymd(now);
    let kind = null;
    if (!skipped) {
      if (dow === byKind.gbm) kind = "gbm";
      else if (dow === byKind.team1) kind = "team1";
      else if (dow === byKind.team2) kind = "team2";
    }
    cells.push({
      key,
      label: String(dayNum),
      kind,
      isToday,
      dim: false,
    });
  }
  return cells;
}

export default function Calendar() {
  const now = useMemo(() => new Date(), []);
  const monthTitle = now.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: schedule.timezone,
  });

  const cells = useMemo(
    () => buildMonthCells(now, schedule.recurring, schedule.exceptions),
    [now]
  );

  const oneOffs = schedule.oneOffEvents || [];

  return (
    <section
      id="calendar"
      className="section-pad scroll-mt-24 border-t-[3px] border-ink bg-paper py-12 text-ink md:bg-ink md:py-20 md:text-paper"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-[72px]">
        <div className="order-2 flex flex-col gap-4 lg:order-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="headline misreg-red text-[clamp(36px,5vw,48px)] text-ink md:text-paper">
              {monthTitle}
            </h3>
            <div className="mono-label flex flex-wrap items-center gap-4 text-[11px] text-muted-paper md:text-muted-ink">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-3.5 w-3.5 border-2 border-ink bg-red md:border-paper" />
                GBM
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-3.5 w-3.5 border-2 border-ink bg-paper md:border-paper" />
                Team 1
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-3.5 w-3.5 border-2 border-red md:border-red-on-ink" />
                Team 2
              </span>
            </div>
          </div>

          <table className="w-full border-collapse" role="grid" aria-label={`${monthTitle} schedule`}>
            <thead>
              <tr className="mono-label text-[11px] text-muted-paper md:text-muted-ink">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <th key={d} scope="col" className="pb-2 text-left font-normal">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: cells.length / 7 }, (_, week) => (
                <tr key={week}>
                  {cells.slice(week * 7, week * 7 + 7).map((cell) => {
                    const label =
                      cell.kind === "gbm"
                        ? "GBM 11:30"
                        : cell.kind === "team1"
                          ? "T1 4 PM"
                          : cell.kind === "team2"
                            ? "T2 11 AM"
                            : null;
                    let cellClass =
                      "box-border min-h-[64px] p-2 align-top border-2 md:min-h-[84px] ";
                    if (cell.dim) {
                      cellClass += "border-transparent text-muted-paper md:text-muted-ink";
                    } else if (cell.kind === "gbm") {
                      cellClass += "border-ink bg-red text-white md:border-paper";
                    } else if (cell.kind === "team1") {
                      cellClass += "border-ink bg-paper text-ink md:border-paper";
                    } else if (cell.kind === "team2") {
                      cellClass +=
                        "border-red text-red-text md:border-red-on-ink md:text-red-on-ink";
                    } else {
                      cellClass +=
                        "border-dashed border-muted-paper text-ink md:border-muted-ink md:text-paper";
                    }
                    if (cell.isToday) {
                      cellClass += " outline outline-[3px] outline-offset-[-1px] outline-ink md:outline-paper";
                    }
                    return (
                      <td key={cell.key} className={cellClass} tabIndex={cell.dim ? -1 : 0}>
                        <div className="flex h-full min-h-[52px] flex-col justify-between md:min-h-[68px]">
                          <span className="font-mono text-[14px] font-medium md:text-[15px]">
                            {cell.label}
                          </span>
                          {label ? (
                            <span className="font-mono text-[10px] tracking-wide md:text-[11px]">
                              {label}
                            </span>
                          ) : null}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <div className="sticker self-start">02 / Calendar</div>
          <h2 className="headline misreg-red text-[clamp(48px,7vw,72px)] text-ink md:text-paper">
            Mark your week.
          </h2>

          <div className="flex flex-col border-[3px] border-ink bg-ink text-paper shadow-[8px_8px_0_var(--red)] md:border-paper md:bg-paper md:text-ink md:shadow-[8px_8px_0_var(--red)]">
            {schedule.recurring.map((event, index) => (
              <div
                key={event.id}
                className={`flex flex-col gap-0.5 px-5 py-3.5 ${
                  index > 0
                    ? "border-t-2 border-dashed border-paper md:border-ink"
                    : ""
                }`}
              >
                <div className="mono-label text-[11px] text-red-on-ink md:text-red-text md:text-[12px]">
                  {event.title}
                </div>
                <div className="headline text-[28px] leading-tight md:text-[34px]">
                  {event.day}s, {event.time}
                </div>
                <div className="text-[15px]">{event.room}</div>
              </div>
            ))}
          </div>

          <div className="font-mono text-[12px] leading-relaxed text-muted-paper md:text-muted-ink">
            {oneOffs.length === 0 ? (
              <p className="m-0">No one-off events posted yet.</p>
            ) : (
              <ul className="m-0 list-disc space-y-1 pl-4">
                {oneOffs.map((event) => (
                  <li key={`${event.date}-${event.title}`}>
                    {event.date}: {event.title}
                    {event.room ? ` (${event.room})` : ""}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 mb-0">
              <a
                href="/bolts-schedule.ics"
                className="font-semibold text-red-text underline md:text-red-on-ink"
              >
                Add to your calendar
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF