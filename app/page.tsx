import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Cloud,
  Code2,
  Fingerprint,
  Globe2,
  HardDrive,
  Laptop2,
  LockKeyhole,
  Network,
  Router,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  UserRoundCheck,
  Wifi,
} from "lucide-react";

const baseRecommendations = [
  {
    number: "01",
    title: "Единое гео",
    text: "Аккаунт, IP, способ оплаты и номер телефона должны относиться к одному региону.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Стабильная точка доступа",
    text: "Multi IP и CC Gateway обеспечивают постоянный маршрут для всех подключённых устройств.",
    icon: Router,
  },
  {
    number: "03",
    title: "Контролируемый доступ",
    text: "Один IP и согласованный профиль устройства для команды из двух–трёх пользователей.",
    icon: Fingerprint,
  },
  {
    number: "04",
    title: "Плавный старт",
    text: "Начинайте с доступного тарифа, сформируйте обычную историю использования и повышайте план постепенно.",
    icon: SlidersHorizontal,
  },
];

const deviceChecklist = [
  "Синхронизировать часовой пояс, геолокацию и язык с IP",
  "Изолировать Claude в отдельном профиле браузера",
  "Защитить соединение от утечек реального IP через WebRTC",
  "Отключить необязательную телеметрию в настройках",
  "Периодически очищать локальные данные сервиса",
  "Настроить системный прокси для автоматической работы Claude Code",
];

const stages = [
  {
    label: "Диагностика",
    title: "Разбираем ваш сценарий",
    text: "Устройства, операционные системы, текущий доступ и задачи команды — без лишней технической анкеты.",
    icon: CircleDot,
  },
  {
    label: "Инфраструктура",
    title: "Собираем приватный контур",
    text: "Настраиваем VPS, единый IP, gateway и отдельные профили на каждом устройстве.",
    icon: Server,
  },
  {
    label: "Запуск",
    title: "Подключаем и проверяем",
    text: "Тестируем работу Claude и Claude Code, фиксируем настройки и передаём понятную инструкцию.",
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
          <a href="#recommendations">Рекомендации</a>
          <a href="#process">Как работаем</a>
        </div>
        <a className="nav-cta" href="#contact">
          Обсудить настройку <ArrowUpRightIcon />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Настройка Claude Code под ключ</div>
          <h1>
            Claude работает.<br />
            <em>Где бы вы ни были.</em>
          </h1>
          <p className="hero-lead">
            Единый защищённый контур для Claude и Claude Code на всех ваших устройствах —
            со стабильным IP, собственным VPS и аккуратной настройкой окружения.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Настроить Claude <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#approach">
              Посмотреть, как это работает <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="trust-line">
            <span><Check size={15} /> Windows и macOS</span>
            <span><Check size={15} /> Собственный VPS</span>
            <span><Check size={15} /> Понятная инструкция</span>
          </div>
        </div>

        <div className="network-card" aria-label="Схема защищённого подключения">
          <div className="network-card-head">
            <div><span className="status-dot" /> PRIVATE NETWORK</div>
            <span className="online">ONLINE</span>
          </div>
          <div className="network-scene">
            <div className="device-node node-laptop"><Laptop2 size={21} /><span>MAC</span></div>
            <div className="device-node node-phone"><Smartphone size={20} /><span>MOBILE</span></div>
            <div className="device-node node-pc"><Code2 size={21} /><span>PC</span></div>
            <div className="connection connection-one" />
            <div className="connection connection-two" />
            <div className="connection connection-three" />
            <div className="gateway-node">
              <div className="gateway-rings"><ShieldCheck size={34} /></div>
              <strong>CC GATEWAY</strong>
              <span>ONE SECURE IP</span>
            </div>
            <div className="connection connection-main" />
            <div className="cloud-node"><Cloud size={26} /><strong>CLAUDE</strong></div>
          </div>
          <div className="network-meta">
            <div><span>ROUTE</span><strong>ENCRYPTED</strong></div>
            <div><span>DEVICES</span><strong>03 ACTIVE</strong></div>
            <div><span>LATENCY</span><strong>STABLE</strong></div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Преимущества">
        <div><Wifi size={18} /><span>Один стабильный IP</span></div>
        <div><LockKeyhole size={18} /><span>Изолированная среда</span></div>
        <div><HardDrive size={18} /><span>Ваш собственный сервер</span></div>
        <div><UserRoundCheck size={18} /><span>Настройка под ваш сценарий</span></div>
      </section>

      <section className="section approach" id="approach">
        <div className="section-intro">
          <span className="section-kicker">01 / ПОДХОД</span>
          <h2>Не просто прокси.<br /><span>Цельная система доступа.</span></h2>
        </div>
        <div className="approach-content">
          <p className="large-copy">
            Стабильность зависит не от одной настройки. Важно, чтобы аккаунт, сеть,
            устройство и привычный сценарий использования не противоречили друг другу.
          </p>
          <p>
            Мы собираем эти элементы в единую конфигурацию и проверяем её на каждом
            устройстве. В результате вы получаете рабочую среду, которой легко пользоваться
            каждый день — без постоянного переключения VPN и ручной настройки терминала.
          </p>
          <div className="principle-card">
            <Sparkles size={20} />
            <div><strong>Главный принцип</strong><span>Одинаковые условия подключения, предсказуемое поведение системы.</span></div>
          </div>
        </div>
      </section>

      <section className="recommendations" id="recommendations">
        <div className="section recommendations-head">
          <div className="section-intro">
            <span className="section-kicker light">02 / БАЗОВАЯ КОНФИГУРАЦИЯ</span>
            <h2>Четыре уровня<br /><span>стабильной настройки</span></h2>
          </div>
          <p>
            Базовые правила, на которых строится надёжный доступ к Claude для одного
            пользователя или небольшой команды.
          </p>
        </div>
        <div className="recommendation-grid">
          {baseRecommendations.map((item) => {
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

      <section className="section device-section">
        <div className="device-visual" aria-hidden="true">
          <div className="terminal-window">
            <div className="terminal-bar"><span /><span /><span /><em>gateway.config</em></div>
            <div className="terminal-body">
              <p><i>01</i><span className="code-muted"># device profile</span></p>
              <p><i>02</i><b>network</b>: <span className="code-value">secure_route</span></p>
              <p><i>03</i><b>system_proxy</b>: <span className="code-good">enabled</span></p>
              <p><i>04</i><b>telemetry</b>: <span className="code-value">disabled</span></p>
              <p><i>05</i><b>browser_profile</b>: <span className="code-good">isolated</span></p>
              <p><i>06</i><span className="code-muted"># status: ready</span></p>
            </div>
          </div>
          <div className="secure-badge"><ShieldCheck size={20} /><span><strong>PROFILE READY</strong>6/6 параметров настроено</span></div>
        </div>
        <div className="device-copy">
          <span className="section-kicker">03 / КАЖДОЕ УСТРОЙСТВО</span>
          <h2>Аккуратная настройка — <span>в деталях</span></h2>
          <p>
            На каждом компьютере создаём отдельную, согласованную с сетью среду. Всё,
            что можно автоматизировать, работает в фоне.
          </p>
          <ul className="check-list">
            {deviceChecklist.map((item) => (
              <li key={item}><CheckCircle2 size={18} />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section process-inner">
          <div className="process-title">
            <span className="section-kicker light">04 / ПРОЦЕСС</span>
            <h2>От первого сообщения<br />до рабочего Claude</h2>
            <p>Берём техническую часть на себя и объясняем только то, что действительно понадобится вам в работе.</p>
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
            <span className="section-kicker">ГОТОВЫ НАЧАТЬ?</span>
            <h2>Соберём стабильную<br />среду под ваш сценарий.</h2>
            <p>Расскажите, сколько у вас устройств и где вы планируете использовать Claude. Мы предложим понятную схему настройки.</p>
          </div>
          <div className="contact-action">
            <a className="button button-dark" href="mailto:hello@example.com">
              Обсудить задачу <ArrowRight size={19} />
            </a>
            <span><Clock3 size={15} /> Обычно отвечаем в течение часа</span>
          </div>
          <div className="contact-orbit" aria-hidden="true"><div /><div /><div /></div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><Network size={19} /></span><span>CC ROUTE</span></a>
        <p>Настройка инфраструктуры для Claude и Claude Code</p>
        <div><span>© 2026</span><a href="#recommendations">Рекомендации</a><a href="#process">Процесс</a></div>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ChevronRight size={16} aria-hidden="true" />;
}
