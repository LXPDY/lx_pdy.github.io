import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as n,c as i,b as e,d as o,a,w as l,f as s}from"./app-d133123e.js";const h={},p=s('<h1 id="delegation-委托机制" tabindex="-1"><a class="header-anchor" href="#delegation-委托机制" aria-hidden="true">#</a> Delegation 委托机制</h1><p>【这段GPT翻译的时候，把<code>delegating object</code> 和 <code>delegate</code> 翻译成“委托对象”和“委托”了,而在实际作用上，称之为“发出委托的对象”和“被委托以任务的对象”或许比较合适，但是拗口又不方便阅读,所以笔者认为英文的动作语态能更好地表达原义，这部分就不做翻译了】</p><p>​ <code>Delegation</code>是程序中的一个简单而强大的模式，在这个模式下，在程序中的一个对象会代表（<code>on be half of</code>）或者协调（<code>in coordination with</code>）另一个对象。<code>delegating object</code>保持对另一个对象（即 <code>delegate</code> ）的引用（<code>reference</code>），并在适当的时候向其<strong>发送消息</strong>。该消息（一个事件的委托）通知<code>delegate</code> ，说明接下来它将要去处理或已处理的事件。<code>delegate</code> 可以<strong>通过更新其自身或应用程序中的其他对象的外观或状态来响应该消息</strong>，并在某些情况下，它可以<strong>返回一个影响即将发生的事件的处理方式的值</strong>。<strong>委托的主要价值在于它允许您轻松地自定义一个中心对象中的多个对象的行为。、</strong></p><h2 id="delegation-and-the-cocoa-frameworks-委托和cocoa框架" tabindex="-1"><a class="header-anchor" href="#delegation-and-the-cocoa-frameworks-委托和cocoa框架" aria-hidden="true">#</a> Delegation and the Cocoa Frameworks 委托和Cocoa框架</h2><p><code>delegating object</code> 通常是框架对象，而 <code>delegate</code> 通常是控制器<code>controller</code>对象。在托管<code>managed</code>内存环境中，<code>delegating object</code> 维护对其 <code>delegate</code> 的<strong>弱引用</strong>；在垃圾回收环境中，接收器<code>receiver</code>维护对其 <code>delegate</code>的强引用。【这里也涉及到了消息机制，接收器其实就是OC类】在Foundation、UIKit、AppKit和其他Cocoa和Cocoa Touch框架中，Delegation的示例比比皆是。</p><p>一个关于<code>delegating object</code> 的示例——AppKit框架中的NSWindow类的实例</p><ul><li>NSWindow声明了一个协议<code>protocol</code>，协议中有一个方法叫做<code>windowShouldClose:</code>。当用户单击窗口中的关闭按钮时，窗口对象向其 <code>delegate</code>发送<code>windowShouldClose:</code>消息以请求确认窗口的关闭。<code>delegate</code>返回一个布尔值，从而控制窗口对象的行为。</li><li>下图表示了框架对象向其 <code>delegate</code>发送消息</li></ul><img src="https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Art/delegation_2x.png" alt="delegation_2x" style="zoom:67%;"><h2 id="delegation-and-notifications-委托和通知" tabindex="-1"><a class="header-anchor" href="#delegation-and-notifications-委托和通知" aria-hidden="true">#</a> Delegation and Notifications 委托和通知</h2><p>大多数Cocoa框架类的 <code>delegate</code>都会自动注册为<code>delegating object</code>发布的通知<code>notifications</code>的<strong>观察者</strong>【好家伙还涉及到观察者模式】。<code>delegate</code>只需要实现框架类声明的<strong>通知方法</strong><code>notifications method</code>，以接收特定的通知消息。如上述的示例，窗口对象会向观察者发布一个<code>NSWindowWillCloseNotification</code>通知，<code>but</code>【这里不知道为什么苹果用了个but，我认为这里不存在转折语意，或许用and会通顺一点】会向其<code>delegate</code>发送<code>windowShouldClose:</code>消息。</p><h2 id="data-source-数据源" tabindex="-1"><a class="header-anchor" href="#data-source-数据源" aria-hidden="true">#</a> Data Source 数据源</h2><p>数据源与<code>delegate</code>几乎相同。它们的区别在于它们与<code>delegating object</code>的关系。与（<code>delegate</code>）被委托控制用户界面不同，数据源被委托控制数据。通常，<code>delegating object</code>是视图对象，如<code>table view</code>，它保存对其数据源【此处的<code>date source</code>应该单纯指的是数据来源，而非“数据源”这整个概念】的引用，并偶尔向其请求应该显示的数据。数据源【此处则是表达整个概念】则像<code>delegate</code>一样，必须采用一个<strong>协议</strong>，并实现该协议所需实现的方法。数据源负责管理供给给<code>delegating view</code>的<code>model objects</code>的内存。【其实就是数据面的<code>delegate</code>】</p><h2 id="苹果官方给的参考文献" tabindex="-1"><a class="header-anchor" href="#苹果官方给的参考文献" aria-hidden="true">#</a> 苹果官方给的参考文献</h2><p>有时间把我翻译过的给他标注了</p><h3 id="prerequisite-articles" tabindex="-1"><a class="header-anchor" href="#prerequisite-articles" aria-hidden="true">#</a> Prerequisite Articles</h3>',15),g={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ClassDefinition.html#//apple_ref/doc/uid/TP40008195-CH6-SW1",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"related-articles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-articles","aria-hidden":"true"},"#"),o(" Related Articles")],-1),f={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Notification.html#//apple_ref/doc/uid/TP40008195-CH35-SW1",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Protocol.html#//apple_ref/doc/uid/TP40008195-CH45-SW1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/ControllerObject.html#//apple_ref/doc/uid/TP40008195-CH11-SW1",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"definitive-discussion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#definitive-discussion","aria-hidden":"true"},"#"),o(" Definitive Discussion")],-1),b={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/DelegatesandDataSources/DelegatesandDataSources.html#//apple_ref/doc/uid/TP40010810-CH11",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"sample-code-projects",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sample-code-projects","aria-hidden":"true"},"#"),o(" Sample Code Projects")],-1),D={href:"https://developer.apple.com/library/archive/samplecode/TableViewSuite/Introduction/Intro.html#//apple_ref/doc/uid/DTS40007318",target:"_blank",rel:"noopener noreferrer"};function w(S,x){const c=d("RouterLink"),t=d("ExternalLinkIcon");return n(),i("div",null,[e("p",null,[o("这篇文章摘自"),a(c,{to:"/tec/basic/OC%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97.html"},{default:l(()=>[o("OC编程")]),_:1}),o("苹果原文的超链接，由于是个弹窗所以贴不了网址")]),p,e("ul",null,[e("li",null,[e("a",g,[o("Class definition"),a(t)])])]),u,e("ul",null,[e("li",null,[e("a",f,[o("Notification"),a(t)])]),e("li",null,[e("a",_,[o("Protocol"),a(t)])]),e("li",null,[e("a",m,[o("Controller object"),a(t)])])]),C,e("p",null,[e("a",b,[o("Delegates and Data Sources"),a(t)])]),v,e("ul",null,[e("li",null,[e("a",D,[o("UITableView Fundamentals for iOS"),a(t)])])])])}const j=r(h,[["render",w],["__file","Delegation.html.vue"]]);export{j as default};
