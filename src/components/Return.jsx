import React from "react";
import "./policies.css";

const ReturnPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
          سياسة الاسترجاع
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          في MedaTech، نلتزم برضا العملاء. إذا لم تكن راضياً عن الدورة التي
          اشتريتها، يمكنك طلب استرجاع الأموال خلال 7 أيام من تاريخ الشراء.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          للاستفادة من سياسة الاسترجاع، يجب تقديم الطلب عبر البريد الإلكتروني أو
          نموذج الاتصال الخاص بنا مع تفاصيل الشراء.
        </p>
        <p className="text-gray-700 text-lg">
          سيتم معالجة الطلبات خلال 3-5 أيام عمل، وسيتم إعادة المبلغ عبر طريقة
          الدفع الأصلية.
        </p>
      </div>
    </section>
  );
};

export default ReturnPolicy;
