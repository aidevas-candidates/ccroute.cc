import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  HardDrive,
  Laptop2,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRoundCheck,
  Wifi,
} from "lucide-react";

const outcomes = [
  {
    number: "01",
    title: "Единая рабочая среда",
    text: "Claude Code запускается в согласованной конфигурации на всех устройствах, которые мы подключили.",
    icon: Network,
  },
  {
    number: "02",
    title: "Контроль остаётся у вас",
    text: "Инфраструктура оформляется под ваш проект. После настройки вы получаете доступы и понимаете, что именно вам принадлежит.",
    icon: LockKeyhole,
  },
  {
    number: "03",
    title: "Проверенный запуск",
    text: "Вместе проходим рабочий сценарий и подтверждаем результат на каждом согласованном устройстве.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Понятная передача",
    text: "Вы получаете короткую инструкцию: как запускать, что считать нормальной работой и куда смотреть при изменениях.",
    icon: UserRoundCheck,
  },
];

const included = [
  "Разбор вашего сценария и списка устройств",
  "Настройка согласованной рабочей среды",
  "Проверка Claude Code в реальной задаче",
  "Передача доступов к вашей инфраструктуре",
  "Короткая инструкция для ежедневной работы",
  "Сопровождение во время запуска",
];

const stages = [
  {
    label: "Диагностика",
    title: "Сначала понимаем задачу",
    text: "Уточняем устройства, операционные системы и привычный способ работы. Фиксируем подходящий сценарий и состав настройки.",
    icon: CircleDot,
  },
  {
    label: "Настройка",
    title: "Собираем среду под вас",
    text: "Берём техническую часть на себя и собираем согласованный рабочий сценарий под ваши устройства.",
    icon: Server,
  },
  {
    label: "Передача",
    title: "Проверяем и передаём контроль",
    text: "Запускаем рабочий сценарий на согласованных устройствах, передаём доступы и оставляем понятную инструкцию.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="CC Route — на главную">
          <span className="brand-mark"><Network size={20} strokeWidth={2.2} /></span>
          <span>CC ROUTE</span>
        </a>
        <div className="nav-links">
          <a href="#approach">Подход</a>
          <a href="#result">Результат</a>
          <a href="#process">Как проходит</a>
        </div>
        <a className="nav-cta" href="#contact">
          Обсудить задачу <ArrowUpRightIcon />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Настройка Claude Code</div>
          <h1>
            Рабочая среда.<br />
            <em>На ваших устройствах.</em>
          </h1>
          <p className="hero-lead">
            Профессионально собираем и проверяем среду для Claude Code.
            Вы получаете понятную конфигурацию, инфраструктуру под своим контролем
            и сопровождение при запуске.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Обсудить задачу <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#result">
              Посмотреть результат <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="trust-line" aria-label="Поддерживаемые сценарии">
            <span><Image src="/claude.svg" alt="" width={15} height={15} /> Claude Code</span>
            <span><Image src="/apple.svg" alt="" width={15} height={15} /> macOS</span>
            <span><Laptop2 size={15} /> Windows</span>
            <span><Check size={15} /> Несколько устройств</span>
            <span><Check size={15} /> Передача контроля</span>
          </div>
        </div>

        <div className="network-card" aria-label="Схема единой рабочей среды">
          <div className="network-card-head">
            <div><span className="status-dot" /> WORKSPACE STATUS</div>
            <span className="online">READY</span>
          </div>
          <div className="network-scene">
            <div className="device-stack">
              <div className="device-node"><Laptop2 size={21} /><span>MAC</span></div>
              <div className="device-node"><Smartphone size={20} /><span>MOBILE</span></div>
              <div className="device-node"><Code2 size={21} /><span>PC</span></div>
            </div>
            <div className="route-in" aria-hidden="true">
              <span /><span /><span /><i />
            </div>
            <div className="gateway-node">
              <div className="gateway-rings"><ShieldCheck size={34} /></div>
              <strong>ONE WORKSPACE</strong>
              <span>CONFIGURED</span>
            </div>
            <div className="route-out" aria-hidden="true"><i /></div>
            <div className="cloud-node"><Image src="/claude.svg" alt="" width={27} height={27} /><strong>CLAUDE CODE</strong></div>
          </div>
          <div className="network-meta">
            <div><span>ACCESS</span><strong>READY</strong></div>
            <div><span>DEVICES</span><strong>VERIFIED</strong></div>
            <div><span>CONTROL</span><strong>YOURS</strong></div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Преимущества">
        <div><Wifi size={18} /><span>Одна понятная конфигурация</span></div>
        <div><LockKeyhole size={18} /><span>Согласованный рабочий сценарий</span></div>
        <div><HardDrive size={18} /><span>Инфраструктура под вашим контролем</span></div>
        <div><UserRoundCheck size={18} /><span>Проверка на каждом устройстве</span></div>
      </section>

      <section className="section approach" id="approach">
        <div className="section-intro">
          <span className="section-kicker">01 / ПОДХОД</span>
          <h2>Цельная рабочая среда.<br /><span>Для ежедневных задач.</span></h2>
        </div>
        <div className="approach-content">
          <p className="large-copy">
            Одна согласованная конфигурация помогает спокойно продолжать работу
            на каждом подключённом устройстве.
          </p>
          <p>
            Мы приводим ваш сценарий к одной согласованной конфигурации, проверяем её
            в реальной задаче и передаём вам. Внутреннюю техническую часть берём на себя,
            а вам оставляем понятный и готовый к работе результат.
          </p>
          <div className="principle-card">
            <Sparkles size={20} />
            <div><strong>Главный принцип</strong><span>Мы настраиваем и проверяем. Вы спокойно используете.</span></div>
          </div>
        </div>
      </section>

      <section className="recommendations" id="result">
        <div className="section recommendations-head">
          <div className="section-intro">
            <span className="section-kicker light">02 / РЕЗУЛЬТАТ</span>
            <h2>Что остаётся у вас<br /><span>после настройки</span></h2>
          </div>
          <p>
            Рабочая среда, понятная передача и контроль над тем,
            за что вы платите.
          </p>
        </div>
        <div className="recommendation-grid">
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="recommendation-card" key={item.number}>
                <div className="rec-top"><span>{item.number}</span><Icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="rec-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="section device-section" id="included">
        <div className="device-visual" aria-label="Состав передаваемой конфигурации">
          <div className="handover-window">
            <div className="handover-bar"><span /><span /><span /><em>project handover</em></div>
            <div className="handover-body">
              <div><span>Рабочая среда</span><strong>READY</strong></div>
              <div><span>Устройства</span><strong>VERIFIED</strong></div>
              <div><span>Доступы</span><strong>TRANSFERRED</strong></div>
              <div><span>Инструкция</span><strong>INCLUDED</strong></div>
            </div>
          </div>
          <div className="secure-badge"><ShieldCheck size={20} /><span><strong>ГОТОВО К РАБОТЕ</strong>Результат проверен вместе с вами</span></div>
        </div>
        <div className="device-copy">
          <span className="section-kicker">03 / ЧТО ВХОДИТ</span>
          <h2>Техническая часть — <span>на нашей стороне</span></h2>
          <p>
            Состав работ фиксируем до начала настройки, а после передачи у вас
            остаются доступы и понятная инструкция.
          </p>
          <ul className="check-list">
            {included.map((item) => (
              <li key={item}><CheckCircle2 size={18} />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section process-inner">
          <div className="process-title">
            <span className="section-kicker light">04 / ПРОЦЕСС</span>
            <h2>От вашего сценария<br />до проверенного запуска</h2>
            <p>Каждый этап заканчивается понятным результатом: от согласованного сценария до проверенного запуска.</p>
          </div>
          <div className="stage-list">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article className="stage" key={stage.label}>
                  <div className="stage-number">0{index + 1}</div>
                  <div className="stage-icon"><Icon size={21} /></div>
                  <div>
                    <span>{stage.label}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="section-kicker">СНАЧАЛА — ДИАГНОСТИКА</span>
            <h2>Подберём решение под ваш сценарий.</h2>
            <p>Напишите, какие устройства используете и как планируете работать с Claude Code. Предложим подходящий состав настройки под ваш сценарий.</p>
          </div>
          <div className="contact-action">
            <a className="button button-dark" href="https://t.me/ikokolsk1y" target="_blank" rel="noreferrer">
              Написать в Telegram <ArrowRight size={19} />
            </a>
            <span><CheckCircle2 size={15} /> Понятный состав работы до начала настройки · @ikokolsk1y</span>
          </div>
          <div className="contact-orbit" aria-hidden="true"><div /><div /><div /></div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><Network size={19} /></span><span>CC ROUTE</span></a>
        <p>Профессиональная настройка рабочей среды для Claude Code</p>
        <div><span>© 2026</span><a href="#result">Результат</a><a href="#contact">Связаться</a></div>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ChevronRight size={16} aria-hidden="true" />;
}
