# 🚀 Clean Code 1986 - "WOW Factor" Technical Upgrade Plan

## 📁 Project Architecture & Context Tracker
**Project Path:** `/Users/marosdeeuma/cleancode1986-portfolio-nextjs`
**Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, TypeScript, `framer-motion`, `lucide-react`.
**Core Concept:** "Clean Code 1986" - A premium AI-driven digital agency. The team consists of 1 Human CEO (มะรอสดี อุมา) and several AI Agents.
**Design System (The 3 Themes):** 
1. **Premium:** Modern, sleek, glassmorphism, glowing accents.
2. **Terminal:** Hacker, CLI, green-on-black monospace.
3. **Retro Tech Magazine:** Brutalist, 8-bit, cyberpunk, high-contrast flat colors.

---

## 🛠️ Step-by-Step Task Execution Protocol (For Next AI Agent)
**CRITICAL INSTRUCTION FOR AI:** DO NOT attempt to complete all tasks at once. Ask the USER which task to execute first. Use Clean Architecture principles. Do not use workarounds. Create separate UI components in `src/presentation/components/ui/` for reusability. Implement code using absolute imports (`@/src/...`).

---

### 🟢 Task 1: 🕹️ พลิกโฉมลูกเล่น Interactive (ขยี้จุดเด่นแต่ละ Theme)
**Objective:** สร้างจุดเด่น (Wow Factor) แรกพบในหน้า Home ของทั้ง 3 Template ให้ User เกิด Interaction ที่แตกต่างกันอย่างสิ้นเชิงตาม Theme ที่เลือกใช้งาน

#### 1A. Terminal Theme: "พิมพ์คำสั่งได้จริง" (Interactive Shell)
**Target:** `src/presentation/components/ui/terminal/InteractiveTerminal.tsx` (สร้างใหม่)
**Implementation Details:**
- เปลี่ยน `TerminalBlock` บริเวณ Hero Section ให้เป็น interactive console
- ใช้ React state ควบคุม `[input, setInput]` และ `[history, setHistory]`
- UI: พิมพ์ตัวหนังสือนำหน้า `guest@cleancode1986:~$` ตามด้วย Text Input แบบไร้ขอบ (Invisible Input) และมี Block Cursor สีเขียวกระพริบ (`animate-pulse`)
- รองรับคำสั่ง:
  - `help`: แสดงรายการคำสั่งที่มี (`whoami`, `ls`, `clear`, `sudo hire_us`)
  - `ls`: แสดงรายชื่อหน้าเว็บ (about, portfolio, services)
  - `cd [page]`: สั่ง Redirect ไปหน้าที่ระบุด้วย `useRouter().push()`
  - `sudo hire_us`: แสดงผล ASCII Art ข้อความต้อนรับ และบังคับพาวาร์ปไปหน้า `/contact`
- ดักจับ Event `onKeyDown` สำหรับปุ่ม `Enter` เพื่อประมวลผลคำสั่ง

#### 1B. Retro Theme: "ลากวางหน้าต่างได้" (Draggable Classic OS Window)
**Target:** `src/presentation/components/ui/retro/RetroDraggableWindow.tsx` (สร้างใหม่)
**Implementation Details:**
- ออกแบบกล่อง Component ให้มีหน้าตาเหมือนหน้าต่าง Windows 95 หรือ Mac OS คลาสสิก (ขอบหนา, สีเทาเหลี่ยมๆ, มีปุ่มกากบาทมุมขวาบน)
- ใช้ `framer-motion` ครอบ Component ด้วยแท็ก `<motion.div drag>`
- เพิ่ม Props `dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}` ควบคู่กับ `useRef` ของหน้าจอ หรือ `<motion.div drag dragConstraints={parentRef}>` เพื่อจำกัดกรอบไม่ให้ลากทะลุจอหายไป
- ใส่เนื้อหา Gimmick กวนๆ หรือ Easter Egg ไว้ในหน้าต่างนี้ (เช่น "Warning: AI Agents are secretly planning world domination... Just kidding, hire us!") 
- ให้ User สามารถใช้เมาส์คลิกค้างที่แถบ Title bar แล้วลาก (Drag) โยกไปมาเล่นบนหน้าจอ Home ได้อย่างอิสระ เพิ่มความรู้สึก Nostalgia 300%

#### 1C. Premium Theme: "3D Interactive" (Mouse-tracking 3D Object)
**Target:** `src/presentation/components/home/views/HomePremiumView.tsx` (ส่วน Hero Section)
**Implementation Details:**
- เพิ่ม Library ใหม่: `npm install three @react-three/fiber @react-three/drei`
- สร้าง Component รียูส `Premium3DHero.tsx` 
- วาง `<Canvas>` จาก `react-three-fiber` ไว้เป็น Layer Background ด้านหลัง Text ใน Hero Section
- เพิ่มโมเดล 3D แบบ Abstract ล้ำๆ (เช่น กลุ่มก้อน Particle ทรงกลมเรืองแสง, โมเดลลูกแก้วสะท้อนแสง, หรือ Server Rack เรืองแสงแนว AI)
- ใช้ `useFrame` ร่วมกับ `state.pointer.x / y` เพื่อให้ทิศทางของโมเดล 3D หมุนเอียงตัวตามตำแหน่งเมาส์ของ User แบบเรียลไทม์ (Parallax 3D effect แบบเว็บ High-end)
- **ข้อควรระวัง:** ต้องครอบ Canvas ด้วย `Suspense` เสมอ และหลีกเลี่ยงโมเดลที่ Render หนักเพื่อไม่ให้กระทบ Performance มือถือ

---

### 🟢 Task 2: "Live Telemetry Dashboard" (Data Simulator)
**Objective:** A living dashboard component that simulates complex backend metrics to sell the "AI/Enterprise Code" narrative perfectly.
**Target Files:**
- `src/presentation/components/ui/LiveMetricsBoard.tsx` (Create new)
- Integrate into `AboutPremiumView.tsx` and `AboutTerminalView.tsx`.
**Implementation Details:**
1. Use `useEffect` with `setInterval` to create rapidly changing fake metrics to pass into view components:
   - **System Uptime:** Show `99.99${Math.floor(Math.random() * 9)}%`.
   - **Bugs Squashed:** Start at a baseline (e.g., `10,482`) and increment randomly (+1 to +3) every 5-10 seconds.
   - **AI Neurons Active:** Rapidly fluctuating 7-digit number (e.g., `8,492,104 ops/sec`) updated every 100ms.
2. **Theme-Specific Rendering:**
   - **Premium:** Glowing glass cards (`bg-white/10 backdrop-blur-md`). Use `framer-motion`'s `AnimatePresence` or `motion.span` to make number changes slide up smoothly (like a slot machine).
   - **Terminal:** Raw data output. Add ASCII progress bars that flicker `[||||||||  ] 82%`.
   - **Retro:** 8-bit digital clock aesthetic with harsh neon green borders. Use `RetroCard`.

---

### 🟢 Task 3: "Architecture Comparison Slider" (Before/After Code)
**Objective:** A visual slider showing messy "Spaghetti" code transforming into beautiful "Clean Architecture".
**Target Files:**
- `src/presentation/components/ui/CodeComparisonSlider.tsx` (Create new)
- Inject into `HomePremiumView.tsx` layout.
**Implementation Details:**
1. Create a container `relative w-full h-[400px] overflow-hidden rounded-xl border border-gray-800 bg-gray-950 font-mono text-sm`.
2. Prepare two hardcoded text snippets of React/TypeScript code:
   - **Layer 1 (Background/Before):** Spaghetti Code. Bad variables (`let x = 1`), massive nested ternaries, inline messy styles, fetching directly in UI without hooks. Color this in dull reds/yellows.
   - **Layer 2 (Foreground/After):** Clean Code. Interface definitions, Custom Hooks (`useViewModel`), clean Dependency Injection. Syntax highlight using vibrant green/blue spans.
3. Track mouse position `onMouseMove` or touch events to update a state `sliderPosition` (0 to 100%).
4. Apply the position to Layer 2 via inline style: `clipPath: polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`.
5. Render a vertical dividing line `<div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"/>` moving along `${sliderPosition}%` with a center grab icon.

---

### 🟢 Task 4: "Theme-Native Custom Cursors & Magnetic Points"
**Objective:** Override the default OS cursor with a programmatic React cursor tailored to the active template.
**Target Files:**
- `src/presentation/providers/cursor-provider.tsx` (Create new, inject into `layout.tsx`)
- `src/presentation/components/ui/cursors/ThemeCursor.tsx`
**Implementation Details:**
1. Hide default cursor globally: `body { cursor: none; }` (ensure a `pointer: coarse` media query fallback so it doesn't break mobile viewing).
2. Create a global coordinate tracker using `framer-motion`'s `useMotionValue` and `useSpring` hooks attached to a `window` `mousemove` event.
3. Apply logic based on the `target` element hovered:
   - Identify `<a>`, `<button>`, or `.interactive` class names using React Context or global hover listeners. Set `[isHovering, setIsHovering]`.
4. **Theme Variations:**
   - **Premium:** An SVG circle. Normally `w-4 h-4`. On `isHovering`, expand to `w-12 h-12 bg-indigo-500/30 mix-blend-difference` to swallow the button text smoothly.
   - **Terminal:** A rigid `bg-green-500 w-3 h-5` block. No smooth spring animation (`bounce: 0`). When hovering, it blinks rapidly.
   - **Retro:** A sharp 8-bit pointer image.

---

### 🟢 Task 5: "Global UX Audio Engine" (Subtle Sound Effects)
**Objective:** Deepen the immersion by syncing micro-interactions with audio cues.
**Target Files:**
- Create `src/presentation/providers/audio-provider.tsx` (React Context)
- Create hook `useAudioPlayer()`
**Implementation Details:**
1. Add placeholder Audio files (e.g. `public/sounds/click.mp3`, `public/sounds/hover.mp3`, `public/sounds/terminal-type.mp3`). Generate or use openly licensed short `.wav`/`.mp3` files.
2. The context must hold `[isMuted, setIsMuted]` state. Default should ideally be `true` (muted) to respect modern browser auto-play policies, allowing the user to un-mute via a new toggle button in the Navbar.
3. Implement `playSound('click')` functions inside the `useAudioPlayer` hook.
4. Update Core UI components (`RetroButton`, `TerminalBlock` links, Navigation anchor tags) to trigger `playSound('hover')` on `onMouseEnter` and `playSound('click')` on `onClick`.
5. Crucial: Debounce/throttle the `hover` sound so sweeping across 5 buttons rapidly doesn't cause a horrible audio screech from stacking playbacks.
