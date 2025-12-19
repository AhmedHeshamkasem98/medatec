import { Target, Rocket, Award, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About Medatech
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            مرحباً بكم في MedaTech! نحن منصة تعليمية رائدة تقدم أفضل الدورات
            التدريبية في تطوير الويب، التصميم، البرمجة، والذكاء الاصطناعي.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-blue-600" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                هدفنا هو تمكين المتعلمين من الوصول إلى المعرفة بسهولة وتحقيق
                أهدافهم المهنية والشخصية من خلال محتوى تعليمي عالي الجودة.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Rocket className="w-7 h-7 text-blue-600" />
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                أن نصبح المنصة الأكثر موثوقية في العالم لتنمية المهارات حيث
                تلتقي أساليب التعلم المبتكرة بالخبرة العملية نتطلع إلى مستقبل
                يُحدث فيه التعليم الجيد نقلة نوعية في حياة الناس ويفتح أمامهم
                آفاقًا واسعة من الفرص.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Makes Us Special
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Expert Instructors
                </h4>
                <p className="text-gray-600">
                  تعلم من خبراء الصناعة الذين يمتلكون سنوات من الخبرة العملية
                </p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Supportive Community
                </h4>
                <p className="text-gray-600">
                  انضم إلى آلاف المتعلمين واحصل على الدعم من أقرانك و الموجهين
                </p>
              </div>

              <div className="text-center">
                <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Career Growth</h4>
                <p className="text-gray-600">
                  اكتسب مهارات عملية تؤدي إلى فرص عمل حقيقية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
