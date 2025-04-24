import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-right">
      <div className="flex justify-center sm:justify-end w-full mb-10 sm:mb-10 mt-7">
        <h1 className="text-4xl sm:text-[3rem] sm:mr-7">תא הזרע</h1>
      </div>

      <div className="w-full flex flex-col sm:flex-row-reverse items-center">
        <div className="mx-5">
          <p className="text-right">
            תא הזרע מותאם לתפקידו – הפריית הביצית – באמצעות מבנהו הייחודי, שמאפשר לו לנוע ביעילות, לשרוד בסביבת מערכת הרבייה הנשית ולחדור לביצית.
          </p>
          <br />
          <div className="flex flex-row-reverse gap-2">
            <span>1.</span>
            <p className="flex-1 text-right">
              הראש – מכיל את החומר התורשתי (דנא) של האב, אשר יועבר לביצית בעת ההפריה. הדנא נמצא בתוך גרעין דחוס במיוחד, מה שמאפשר לתא הזרע להיות קטן ואווירודינמי לניידות טובה יותר.
            </p>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <span>2.</span>
            <p className="flex-1 text-right">
              האקרוזום – זהו כיס מיוחד בראש תא הזרע המכיל אנזימים מפרקי חלבונים וסוכרים. האנזימים הללו מסייעים לפירוק מעטפת הביצית, כדי לאפשר לזרע לחדור לתוכה ולהפרות אותה.
            </p>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <span>3.</span>
            <p className="flex-1 text-right">
              האזור האמצעי (צוואר התא) – מכיל מספר רב של מיטוכונדריה, האברונים האחראים על ייצור אנרגיה. אנרגיה זו חיונית לתנועה ממושכת של הזרע בתוך מערכת הרבייה הנשית בדרכו לביצית.
            </p>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <span>4.</span>
            <p className="flex-1 text-right">
              השוטון (הזנב) – מבנה ארוך ודק הפועל כמו שוט ומייצר תנועתיות. השוטון מתנועע בתנועה גלית שמאפשרת לתא הזרע לשחות קדימה לעבר הביצית.
            </p>
          </div>
          <br />
          <h2 className="text-xl sm:text-3xl font-bold text-right">אברוני תא הזרע</h2>
          <p className="text-right">
            בתא הזרע יש את האברונים הבאים:
          </p>
          <ul className="list-disc pr-5 text-right list-inside" style={{ listStylePosition: 'inside', direction: 'rtl' }}>
            <li>
              <strong>גרעין</strong> – מכיל את המטען הגנטי (DNA) של תא הזרע. נמצא בראש התא, דחוס וצפוף כדי להגן על החומר התורשתי.
            </li>
            <li>
              <strong>מיטוכונדריה</strong> – מספקות אנרגיה (ATP) לתנועת השוטון. מרוכזות בחלק האמצעי של תא הזרע.
            </li>
            <li>
              <strong>אקרוזום</strong> – אברון דמוי כיפה בקצה הראש. מכיל אנזימים שעוזרים לחדור את קרום הביצית.
            </li>
            <li>
              <strong>ציטופלזמה</strong> – שארית דקה בלבד, שכן תא הזרע משיל כמעט את כל הציטופלזמה שלו כדי להיות קל ומהיר.
            </li>
            <li>
              <strong>קרום התא</strong> – עוטף את תא הזרע ושומר על סביבת התא. משתתף גם בזיהוי וקליטה של הביצית.
            </li>
            <li>
              <strong>צנטריול</strong> – מעורב בארגון השלד התאי ובחלוקת התאים לאחר ההפריה.
            </li>
            <li>
              <strong>שוטון (פלגלה)</strong> – מבנה זנבי שמאפשר לתא הזרע לנוע ולשחות לעבר הביצית.
            </li>
          </ul>
          <br />
          <p className="text-right">
            מבנה זה מאפשר לתא הזרע לשרוד בסביבה עוינת יחסית, לנוע ביעילות, לחדור את מעטפת הביצית ולהעביר את החומר התורשתי להפריה מוצלחת.
          </p>
        </div>

        <div className="m-5 sm:my-0">
          <Image
            className="rounded-2xl border-2 border-[#171717] dark:border-[#9f9f9f]"
            src="/images/SpermnCell.jpeg"
            alt="Science formula image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}