import React from "react";
import "./policies.css";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
          سياسة الخصوصية
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          نحن في MedaTech نولي خصوصية مستخدمينا أهمية قصوى. جميع البيانات التي
          يتم جمعها تستخدم لتحسين تجربتك وتقديم محتوى ودورات تعليمية مخصصة.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          لن نقوم بمشاركة معلوماتك مع أي طرف ثالث دون موافقتك، ونضمن أمانها من
          خلال أفضل الإجراءات الأمنية المتاحة.
        </p>
        <p className="text-gray-700 text-lg">
          باستخدام موقعنا، فإنك توافق على جمع واستخدام البيانات وفقاً لهذه
          السياسة.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
