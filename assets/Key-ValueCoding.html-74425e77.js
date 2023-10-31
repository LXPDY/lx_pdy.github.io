import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as i,b as e,d as n,a as s,f as o}from"./app-cb27a6aa.js";const r={},p=o('<h1 id="key-value-coding-programming-guide" tabindex="-1"><a class="header-anchor" href="#key-value-coding-programming-guide" aria-hidden="true">#</a> Key-Value Coding Programming Guide</h1><h2 id="about-key-value-coding" tabindex="-1"><a class="header-anchor" href="#about-key-value-coding" aria-hidden="true">#</a> About Key-Value Coding</h2><p><code>Key-Value Coding（以下简称KVC）</code>是一种由对象采用非正式协议<code>NSKeyValueCoding</code>从而启用的机制，它提供了<strong>对对象的属性的间接访问</strong>。当一个对象是KVC兼容的时，就可以<strong>借助字符串参数</strong>从而用一个简洁统一的<strong>消息接口</strong>来访问它的属性。这种间接访问机制扩展了由实例变量及其相关的访问方法提供的直接访问之外的访问方法。</p><p>通常，您使用访问方法<code>accessor methods</code>来访问对象的属性。一个获取器<code>get accessor</code>（或getter）返回属性的值。一个设置器<code>set accessor</code>（或setter）设置属性的值。在Objective-C中，您还可以直接访问属性的基础实例变量。虽然以这些方式访问对象的属性非常直观，但仍需要去调用属性特定名字的方法或获取变量。随着属性列表的增加或更改，访问这些属性的代码也必须随之变化。相比之下，一个兼容KVC的对象提供了一个简单的消息接口，该接口在其所有属性上都保持一致。</p><p>KVC是许多其他Cocoa技术底层的基本概念，比如<code>key-value observing</code>、<code>Cocoa bindings</code>、<code>Core Data</code>和<code>AppleScript-ability</code>。KVC还可以在某些情况下帮助简化代码。</p><h3 id="using-key-value-coding-compliant-objects-使用支持kvc的对象" tabindex="-1"><a class="header-anchor" href="#using-key-value-coding-compliant-objects-使用支持kvc的对象" aria-hidden="true">#</a> Using Key-Value Coding Compliant Objects 使用支持KVC的对象</h3><p>通常情况下，当对象继承自NSObject（直接或间接继承），它会采用KVC，因为NSObject采用了<code>NSKeyValueCoding</code>协议并为基本方法提供了默认实现。<strong>这样的对象可以通过一个紧凑的消息接口使其他对象执行以下操作</strong>：</p>',7),u=e("code",null,"valueForKey:",-1),d=e("code",null,"setValue:forKey:",-1),h={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170-BAJEAIEE",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"Manipulate collection properties.",-1),g=e("code",null,"collection accessor methods ",-1),b=e("strong",null,"它可以启用对集合内容的键-值访问",-1),v=e("strong",null,"这通常比直接访问更有效",-1),m={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/AccessingCollectionProperties.html#//apple_ref/doc/uid/10000107i-CH4-SW1",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"集合运算符",-1),_=e("code",null,"*collection operator*",-1),C={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/CollectionOperators.html#//apple_ref/doc/uid/20002176-BAJEAIEE",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"NSKeyValueCoding getter方法的实现",-1),K=e("strong",null,"然后返回集合的新版本、过滤版本，或者代表集合某些特性的单个值",-1),V=e("strong",null,"Access non-object properties.",-1),S=e("code",null,"scalars",-1),w=e("code",null,"structures",-1),N={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/DataTypes.html#//apple_ref/doc/uid/20002171-BAJEAIEE",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,[e("strong",null,"Access properties by key path."),n(" 通过键路径访问属性。 "),e("ul",null,[e("li",null,"当您有一组支持KVC的对象的层次结构时，可以使用基于key路径的方法调用来深入访问，使用一次调用就可以获取或设置层次结构深处的值。")])],-1),A=o('<h3 id="adopting-key-value-coding-for-an-object-为对象兼容kvc" tabindex="-1"><a class="header-anchor" href="#adopting-key-value-coding-for-an-object-为对象兼容kvc" aria-hidden="true">#</a> Adopting Key-Value Coding for an Object 为对象兼容KVC</h3><p>要使您自己的对象支持KVC，您需要确保它们使用了<code>非正式协议NSKeyValueCoding</code>并实现相应的方法，如<code>valueForKey:</code>作为通用的获取器，以及<code>setValue:forKey:</code>作为通用的设置器。幸运的是，如上所述，NSObject采用了这个协议并为这些以及其他基本方法提供了默认实现。因此，如果您从NSObject（或其许多子类中的任何一个）派生您的对象，很多工作已经为您完成了。</p><p><strong>为了使默认方法能够正常工作，您需要确保您的对象的访问器方法和实例变量遵循某些明确定义的模式</strong>。这允许默认实现响应KVC的消息来找到您对象的属性。然后，您可以通过提供用于验证和处理某些特殊情况的方法，可选择扩展和自定义KVC的功能。</p><h3 id="key-value-coding-with-swift" tabindex="-1"><a class="header-anchor" href="#key-value-coding-with-swift" aria-hidden="true">#</a> Key-Value Coding with Swift</h3><p>从NSObject或其子类继承的Swift对象默认情况下对其属性支持键-值编码。与Objective-C不同，Swift中标准的属性声明自动保证了这一点，无需遵循特定的访问器和实例变量模式。另一方面，协议的许多特性要么不相关，要么更好地使用本机Swift构造或在Objective-C中不存在的技术来处理。例如，因为所有Swift属性都是对象，您永远不需要使用默认实现的非对象属性的特殊处理。</p><p>因此，尽管键-值编码协议方法可以直接翻译为Swift，但本指南主要关注Objective-C，在那里您需要采取更多措施来确保兼容性，而且键-值编码通常最有用。在Swift中需要显著不同方法的情况在本指南中有所说明。</p><p>有关在使用Swift与Cocoa技术的更多信息，请阅读《使用Swift与Cocoa和Objective-C》（Swift 3）。有关Swift的完整描述，请阅读《Swift编程语言》（Swift 3）。【这里苹果居然不带超链，可恶】</p><h3 id="other-cocoa-technologies-rely-on-key-value-coding" tabindex="-1"><a class="header-anchor" href="#other-cocoa-technologies-rely-on-key-value-coding" aria-hidden="true">#</a> Other Cocoa Technologies Rely on Key-Value Coding</h3><p>支持KVC的对象可以参与广泛的依赖于这种访问方式的Cocoa技术，包括：</p>',9),O=e("code",null,"Key-value observing，KVO",-1),x=e("strong",null,"注册异步通知",-1),P={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"application data",-1),B=e("code",null,"views display",-1),E=e("code",null,"edit that data",-1),T=e("code",null,"controllers",-1),I={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"Core Data",-1),q=e("code",null,"persistence",-1),D={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075",target:"_blank",rel:"noopener noreferrer"},W={href:"https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html#//apple_ref/doc/uid/10000156i",target:"_blank",rel:"noopener noreferrer"},J=o(`<h2 id="accessing-object-properties-访问对象属性" tabindex="-1"><a class="header-anchor" href="#accessing-object-properties-访问对象属性" aria-hidden="true">#</a> Accessing Object Properties 访问对象属性</h2><p>通常情况下，一个对象在其接口声明中指定属性<code>*properties*</code>，这些属性属于以下几种类别：</p><ul><li><strong>Attributes.</strong><ul><li><code>这些是简单的值，比如标量、字符串或布尔值。值对象</code>Value objects\`，如NSNumber和其他不可变类型，比如NSColor，也被视为attributes。</li></ul></li><li>**To-one relationships.**一对一关系. <ul><li>这些是可变对象，拥有自己的属性<code>properties</code>。一个对象的属性可以更改而不会导致对象本身发生变化。例如，一个银行账户对象可能有一个owner属性，该属性是一个Person对象的实例，Person对象本身还具有一个address属性。owner的地址可能会更改，而不会更改由银行账户持有的owner引用。银行账户的所有者没有更改，只是他们的地址发生了变化。</li></ul></li><li>**To-many relationships.**一对多关系 <ul><li>这些是集合对象<code>collection objects</code>。通常使用NSArray或NSSet的实例来保存这样的集合，也可以使用自定义集合类。</li></ul></li></ul><p>在以下代码中声明的BankAccount对象演示了每种属性类型的一个示例。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> BankAccount <span class="token punctuation">:</span> NSObject
 
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">)</span> NSNumber<span class="token operator">*</span> currentBalance<span class="token punctuation">;</span>              <span class="token comment">// An attribute</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">)</span> Person<span class="token operator">*</span> owner<span class="token punctuation">;</span>                         <span class="token comment">// A to-one relation</span>
<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">)</span> NSArray<span class="token operator">&lt;</span> Transaction<span class="token operator">*</span> <span class="token operator">&gt;</span><span class="token operator">*</span> transactions<span class="token punctuation">;</span> <span class="token comment">// A to-many relation</span>
 
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了维护封装性，一个对象通常为其接口上的属性提供访问器方法。对象的作者可以显式编写这些方法，也可以依赖编译器自动生成它们。无论哪种方式，使用其中一个访问器的代码的作者在编译之前必须将属性名称写入代码中。访问器方法的名称成为使用它的代码的静态部分。例如，对于上面的代码声明的银行账户对象，编译器合成了一个可以用于myAccount实例的setter：</p><p><code>[myAccount setCurrentBalance:@(100.0)]; </code></p><p>这是直接的方式，但缺乏灵活性。另一方面，一个支持KVC的对象提供了一种更一般的机制，<strong>可以使用字符串标识符来访问对象的属性</strong>。</p><h3 id="identifying-an-object-s-properties-with-keys-and-key-paths-使用键和键路径标识对象的属性" tabindex="-1"><a class="header-anchor" href="#identifying-an-object-s-properties-with-keys-and-key-paths-使用键和键路径标识对象的属性" aria-hidden="true">#</a> Identifying an Object’s Properties with Keys and Key Paths 使用键和键路径标识对象的属性</h3><p>键<code>Key</code>是一个<strong>字符串</strong>，用于标识特定的属性。通常，按照约定，表示属性的键是属性本身在代码中出现的名称。<strong>键必须使用ASCII编码，不能包含空格，通常以小写字母开头</strong>（尽管也有例外情况，例如在许多类中含有的URL属性）。</p><p>因为上述代码中的BankAccount类支持KVC，它识别键<code>owner</code>、<code>currentBalance</code>和<code>transactions</code>，这些是其属性的名称。您可以使用键来设置值，而不是调用setCurrentBalance:方法：</p><p><code>[myAccount setValue:@(100.0) forKey:@&quot;currentBalance&quot;];</code></p><p>实际上，您可以使用相同的方法通过不同的键参数设置myAccount对象的所有属性。因为参数是一个字符串，所以它可以在运行时进行操作。</p><p>键路径<code>key path</code>是一个<strong>由点分隔的键的字符串</strong>，<strong>用于指定要遍历的一系列对象属性</strong>。序列中第一个键的属性是相对于<code>receiver</code>的，而每个后续键都相对于前一个属性的值进行评估。键路径对于使用单个方法调用深入到对象层次结构中非常有用。</p><p>例如，应用于银行账户实例的键路径<code>owner.address.street</code>指的是存储在银行账户所有者的地址中的街道字符串的值，假设Person和Address类也支持KVC。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意
在Swift中，您可以使用#keyPath表达式来表示键或键路径，而不是使用字符串。
这具有编译时检查的优势，如《使用Swift与Cocoa和Objective-C（Swift 3）》
指南中的Keys and Key Paths部分所述。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getting-attribute-values-using-keys-使用键获取attribute值" tabindex="-1"><a class="header-anchor" href="#getting-attribute-values-using-keys-使用键获取attribute值" aria-hidden="true">#</a> Getting Attribute Values Using Keys 使用键获取Attribute值</h3>`,17),R={href:"https://developer.apple.com/library/archive/documentation/LegacyTechnologies/WebObjects/WebObjects_3.5/Reference/Frameworks/ObjC/Foundation/Classes/NSObject/Description.html#//apple_ref/occ/cl/NSObject",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"valueForKey: ",-1),H={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955-CJBBBFFA",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,[e("code",null,"valueForKeyPath"),e("ul",null,[e("li",null,"返回相对于接收者的指定键路径的值。在键路径序列中，如果某个对象不支持特定键的KVC，也就是说，valueForKey:的默认实现找不到访问器方法，那么该对象会接收一个valueForUndefinedKey:消息。")])],-1),M=e("li",null,[n("dictionaryWithValuesForKeys: "),e("ul",null,[e("li",null,"返回相对于接收者的键数组的值。该方法为数组中的每个键调用valueForKey:。返回的NSDictionary包含数组中所有键的值。")])],-1),X=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意
集合对象，比如NSArray、NSSet和NSDictionary，不能包含nil作为值。
相反，您可以使用NSNull对象来表示nil值。NSNull提供了一个表示对象
属性的nil值的单一实例。dictionaryWithValuesForKeys:
和相关的setValuesForKeysWithDictionary:的默认实现会自动在NSNull
（在字典参数中in the dictionary parameter）
和nil（在存储属性中in the stored property)）之间进行转换。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当您使用键路径来访问属性时，如果键路径中除了最后一个键以外的任何键都是一对多关系（即它引用一个集合），返回的值将是一个包含<strong>所有位于一对多键右侧的键的值的集合</strong>。例如，请求键路径transactions.payee的值将返回一个包含所有交易的所有收款人对象的数组。这也适用于键路径中的多个数组。键路径accounts.transactions.payee将返回包含所有帐户中所有交易的所有收款人对象的数组。</p><h3 id="setting-attribute-values-using-keys-使用键设置attribute值" tabindex="-1"><a class="header-anchor" href="#setting-attribute-values-using-keys-使用键设置attribute值" aria-hidden="true">#</a> Setting Attribute Values Using Keys 使用键设置Attribute值</h3><p>与获取器类似，支持KVC的对象还提供了一小组通用的设置器，其默认行为基于在NSObject中找到的NSKeyValueCoding协议的实现：</p>`,4),z=e("code",null,"setValue:forKey: ",-1),Q=e("code",null,"scalars",-1),Y=e("code",null,"structs",-1),Z=e("code",null,"wrapping",-1),$=e("code",null,"unwrapping",-1),ee={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/DataTypes.html#//apple_ref/doc/uid/20002171-BAJEAIEE",target:"_blank",rel:"noopener noreferrer"},ne=e("li",null,"如果指定的键对应于对象（接受到的setter所）不具有的属性，该对象将向自身发送一个setValue:forUndefinedKey:消息。setValue:forUndefinedKey:的默认实现会引发一个NSUndefinedKeyException异常。然而，子类可以覆盖此方法以自定义方式处理请求。",-1),ae=e("li",null,[e("code",null,"setValue:forKeyPath: "),e("ul",null,[e("li",null,"在相对于接收者的指定键路径中设置给定值。在键路径序列中，如果某个对象不支持特定键的KVC，它会接收到一个setValue:forUndefinedKey:消息。")])],-1),se=e("li",null,[e("code",null,"setValuesForKeysWithDictionary:"),e("ul",null,[e("li",null,"使用指定字典中的值设置接收者的属性，使用字典键来标识属性。它的默认实现会为每个键-值对调用setValue:forKey:，并根据需要将NSNull对象替换为nil。")])],-1),oe={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/HandlingNon-ObjectValues.html#//apple_ref/doc/uid/10000107i-CH5-SW1",target:"_blank",rel:"noopener noreferrer"},te=o(`<h3 id="using-keys-to-simplify-object-access-使用键来简化对象访问" tabindex="-1"><a class="header-anchor" href="#using-keys-to-simplify-object-access-使用键来简化对象访问" aria-hidden="true">#</a> Using Keys to Simplify Object Access 使用键来简化对象访问</h3><p>为了了解基于键的getter和setter如何简化您的代码，考虑以下示例。在macOS中，NSTableView和NSOutlineView对象会将标识符字符串与它们的每个列关联起来。如果支持表格的模型对象不符合KVC规范，那么表格的数据源方法必须逐个检查每个列标识符，以找到正确的属性来返回，如下面的代码所示。此外，将来，当您向模型添加另一个属性，比如Person对象的情况，您还必须重新访问数据源方法，添加另一个条件来测试新属性并返回相关值。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">//Implementation of data source method without key-value coding</span>
<span class="token operator">-</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>tableView<span class="token punctuation">:</span><span class="token punctuation">(</span>NSTableView <span class="token operator">*</span><span class="token punctuation">)</span>tableview objectValueForTableColumn<span class="token punctuation">:</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>column row<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>row
<span class="token punctuation">{</span>
    id result <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>people objectAtIndex<span class="token punctuation">:</span>row<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>column identifier<span class="token punctuation">]</span> isEqualToString<span class="token punctuation">:</span><span class="token string">@&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span>person name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>column identifier<span class="token punctuation">]</span> isEqualToString<span class="token punctuation">:</span><span class="token string">@&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">(</span><span class="token punctuation">[</span>person age<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Wrap age, a scalar, as an NSNumber</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>column identifier<span class="token punctuation">]</span> isEqualToString<span class="token punctuation">:</span><span class="token string">@&quot;favoriteColor&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span>person favoriteColor<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token comment">// And so on...</span>
 
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一方面，下面的代码显示了相同数据源<code> data source</code>方法的一个更紧凑的实现，它利用了符合KVC规范的Person对象。仅使用valueForKey: getter，数据源方法<strong>使用列标识符作为键</strong>返回适当的值。除了更短之外，它还更加通用，<strong>因为只要列标识符始终与模型对象的属性名称匹配</strong>，它就可以在以后添加新列时继续正常工作，不需要进行更改。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token operator">-</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>tableView<span class="token punctuation">:</span><span class="token punctuation">(</span>NSTableView <span class="token operator">*</span><span class="token punctuation">)</span>tableview objectValueForTableColumn<span class="token punctuation">:</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>column row<span class="token punctuation">:</span><span class="token punctuation">(</span>NSInteger<span class="token punctuation">)</span>row
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>people objectAtIndex<span class="token punctuation">:</span>row<span class="token punctuation">]</span> valueForKey<span class="token punctuation">:</span><span class="token punctuation">[</span>column identifier<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//首先self.people 取出列中的Person类的一个实例对象</span>
<span class="token comment">//然后向这个对象发生valueForKey:消息，获取对应列的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="accessing-collection-properties" tabindex="-1"><a class="header-anchor" href="#accessing-collection-properties" aria-hidden="true">#</a> Accessing Collection Properties</h2>`,6);function le(ce,ie){const a=l("ExternalLinkIcon");return c(),i("div",null,[p,e("ul",null,[e("li",null,[n("**Access object properties.**访问对象属性 "),e("ul",null,[e("li",null,[n("该协议规定了方法，如通用的getter方法"),u,n("和通用的setter方法"),d,n("，用于通过名称或key的字符串来访问对象属性。这些和相关方法的默认实现使用key来定位并与底层数据交互，如在「"),e("a",h,[n("Accessing Object Properties"),s(a)]),n(" 访问对象属性」中所描述的。")])])]),e("li",null,[k,n(" 操作集合属性 "),e("ul",null,[e("li",null,[n("访问方法的默认实现与对象的集合属性（如NSArray对象）一样，就像任何其他属性一样。此外，如果一个对象为属性定义了集合访问方法"),g,n("，"),b,n("。"),v,n("，并允许您通过标准化接口与自定义集合对象一起工作，如在「"),e("a",m,[n("Accessing Collection Properties"),s(a)]),n(" 访问集合属性」中所描述的。")])])]),e("li",null,[n("**Invoke collection operators on collection objects.**在集合对象上调用集合运算符 "),e("ul",null,[e("li",null,[n("在访问支持KVC的对象的集合属性时，您可以在key字符串中插入"),y,_,n("，如在「"),e("a",C,[n("Using Collection Operators"),s(a)]),n(" 使用集合运算符」中所描述的。集合运算符指示默认的"),f,n("对集合采取行动，"),K,n("。")])])]),e("li",null,[V,n(" 访问非对象属性。 "),e("ul",null,[e("li",null,[n("协议的默认实现会检测非对象属性，包括标量"),S,n("和结构体"),w,n("，自动将它们包装/解包为对象，以便在协议接口上使用，如在「"),e("a",N,[n("Representing Non-Object Values"),s(a)]),n(" 表示非对象值」中所描述的。此外，该协议声明了一个方法，允许支持KVC的对象在通过KVC接口设置非对象属性的值为nil时，提供适当的操作。")])])]),j]),A,e("ul",null,[e("li",null,[e("p",null,[O,n("这个机制允许对象"),x,n("，这些通知是由另一个对象的属性变化驱动的，如在《"),e("em",null,[e("a",P,[n("Key-Value Observing Programming Guide"),s(a)])]),n(" KVO编程指南》中所描述。")])]),e("li",null,[e("p",null,[n("Cocoa绑定（Cocoa bindings）。这一系列技术完全实现了模型-视图-控制器（Model-View-Controller，MVC）范式，其中模型封装了应用程序数据"),F,n("，视图显示"),B,n("和编辑数据"),E,n("，控制器"),T,n("在两者之间进行调解。要了解更多关于Cocoa绑定的信息，请阅读《"),e("em",null,[e("a",I,[n("Cocoa Bindings Programming Topics"),s(a)])]),n(" Cocoa绑定编程主题》。")])]),e("li",null,[e("p",null,[n("核心数据（"),U,n("）。这个框架提供了通用的、自动化的解决方案，用于讲对象生命周期和对象图管理联系起来的常见解决方案，包括持久性"),q,n("。您可以在《"),e("em",null,[e("a",D,[n("Core Data Programming Guide"),s(a)])]),n(" 核心数据编程指南》中了解有关核心数据的更多信息。")])]),e("li",null,[e("p",null,[n("AppleScript。这种脚本语言使您能够直接控制可脚本化的应用程序以及macOS的许多部分。Cocoa的脚本支持利用KVC来获取和设置可脚本化对象中的信息。NSScriptKeyValueCoding非正式协议中的方法提供了与KVC一起使用的附加功能，包括按多值键的索引获取和设置键值，以及将键-值强制转换（或转换）为适当的数据类型。《"),e("em",null,[e("a",W,[n("AppleScript Overview"),s(a)])]),n(" AppleScript概述》提供了AppleScript及其相关技术的高级概述。")])])]),J,e("p",null,[n("当一个对象采用NSKeyValueCoding协议时，它就支持KVC。继承自"),e("a",R,[n("NSObject"),s(a)]),n("的对象，它提供了协议基本方法的默认实现，会自动采用这个协议并具有某些默认行为。这样的对象至少实现了以下基本基于键的获取方法：")]),e("ul",null,[e("li",null,[G,e("ul",null,[e("li",null,[n("返回由键参数指定的属性的值。如果无法按照「"),e("a",H,[n("Accessor Search Patterns"),s(a)]),n(" 访问器搜索模式」中描述的规则找到由键指定的属性，那么对象将向自身发送一个valueForUndefinedKey:消息。valueForUndefinedKey:的默认实现会引发一个NSUndefinedKeyException异常，但子类可以覆盖此行为并更加优雅地处理这种情况。")])])]),L,M]),X,e("ul",null,[e("li",null,[z,e("ul",null,[e("li",null,[n("给相对于接收消息的对象的指定键的属性以给定值。setValue:forKey:的默认实现会自动展开NSNumber和NSValue对象，这些对象表示标量"),Q,n("和结构"),Y,n("，然后将它们赋给属性。有关包装"),Z,n("和解包"),$,n("语义的详细信息，请参阅「"),e("a",ee,[n("Representing Non-Object Values"),s(a)]),n(" 表示非对象值」。")]),ne])]),ae,se]),e("p",null,[n("在默认实现中，当您尝试将非对象属性设置为nil值时，支持KVC的对象会向自身发送一个setNilValueForKey:消息。setNilValueForKey:的默认实现会引发一个NSInvalidArgumentException异常，但对象可以覆盖此行为以替代默认值或标记值，如「"),e("a",oe,[n("Handling Non-Object Values"),s(a)]),n(" 处理非对象值」中所述。")]),te])}const ue=t(r,[["render",le],["__file","Key-ValueCoding.html.vue"]]);export{ue as default};
